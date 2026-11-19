// WebP derivatives from the image masters in assets-src/photography (never upscaled).
// Output: public/images/<name>-<width>.webp + src/app/core/constants/image-manifest.json
import sharp from 'sharp';
import { mkdir, readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const src = path.join(root, 'assets-src', 'photography');
const out = path.join(root, 'public', 'images');
const WIDTHS = [480, 800, 1200, 1600, 1920, 2560];
await mkdir(out, { recursive: true });
const manifest = {};
const files = (await readdir(src)).filter(f => /\.(png|jpe?g|webp)$/i.test(f)).sort();
for (const file of files) {
  const name = file.replace(/\.(png|jpe?g|webp)$/i, '');
  const meta = await sharp(path.join(src, file)).metadata();
  const widths = WIDTHS.filter(w => w <= meta.width);
  if (meta.width && !widths.includes(meta.width)) {
    widths.push(meta.width);
    widths.sort((a, b) => a - b);
  }
  manifest[name] = { width: meta.width, height: meta.height, widths };
  for (const w of widths) {
    const target = path.join(out, `${name}-${w}.webp`);
    try {
      const srcStat = await stat(path.join(src, file));
      const targetStat = await stat(target);
      if (targetStat.mtimeMs >= srcStat.mtimeMs) continue;
    } catch { /* build it */ }
    await sharp(path.join(src, file))
      .rotate()
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 88, effort: 6, smartSubsample: true })
      .toFile(target);
  }
}
await mkdir(path.join(root, 'src/app/core/constants'), { recursive: true });
await writeFile(path.join(root, 'src/app/core/constants/image-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log('images:', Object.keys(manifest).join(', '));
