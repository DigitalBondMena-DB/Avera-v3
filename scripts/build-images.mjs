// WebP derivatives from the image masters in assets-src/photography (never upscaled).
// Output: public/images/<name>-<width>.webp + src/app/core/constants/image-manifest.json
import sharp from 'sharp';
import { createHash } from 'node:crypto';
import { mkdir, readdir, readFile, stat, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const src = path.join(root, 'assets-src', 'photography');
const out = path.join(root, 'public', 'images');
const WIDTHS = [480, 800, 1200, 1600, 1920, 2560];
const HOME_KEYS = new Set(['home-hero', 'home-markets', 'home-trust-and-compliance']);

await mkdir(out, { recursive: true });
const manifest = {};
const files = (await readdir(src)).filter(f => /\.(png|jpe?g|webp)$/i.test(f)).sort();

for (const file of files) {
  const name = file.replace(/\.(png|jpe?g|webp)$/i, '');
  const filePath = path.join(src, file);
  const fileBuf = await readFile(filePath);
  const hash = createHash('md5').update(fileBuf).digest('hex').slice(0, 8);
  const meta = await sharp(fileBuf).metadata();
  const widths = WIDTHS.filter(w => w <= meta.width);
  if (meta.width && !widths.includes(meta.width)) {
    widths.push(meta.width);
    widths.sort((a, b) => a - b);
  }
  manifest[name] = { width: meta.width, height: meta.height, widths, hash };

  const isHome = HOME_KEYS.has(name);
  if (isHome) {
    for (const f of await readdir(out)) {
      if (f.startsWith(`${name}-`) && f.endsWith('.webp')) {
        const parts = f.replace(/\.webp$/, '').split('.');
        if (parts.length > 1 && parts[parts.length - 1] !== hash) {
          try { await unlink(path.join(out, f)); } catch {}
        }
      }
    }
  }

  for (const w of widths) {
    const targetBase = path.join(out, `${name}-${w}.webp`);
    const targetHashed = path.join(out, `${name}-${w}.${hash}.webp`);

    let needBuild = false;
    try {
      const srcStat = await stat(filePath);
      const checkTarget = isHome ? targetHashed : targetBase;
      const targetStat = await stat(checkTarget);
      if (targetStat.mtimeMs < srcStat.mtimeMs) needBuild = true;
    } catch {
      needBuild = true;
    }

    if (needBuild) {
      const webpBuffer = await sharp(fileBuf)
        .rotate()
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: 88, effort: 6, smartSubsample: true })
        .toBuffer();

      if (isHome) {
        await writeFile(targetHashed, webpBuffer);
        await writeFile(targetBase, webpBuffer);
      } else {
        await writeFile(targetBase, webpBuffer);
      }
    }
  }
}
await mkdir(path.join(root, 'src/app/core/constants'), { recursive: true });
await writeFile(path.join(root, 'src/app/core/constants/image-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log('images:', Object.keys(manifest).join(', '));
