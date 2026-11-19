import type { ImageLoaderConfig } from '@angular/common';
import manifest from '@core/constants/image-manifest.json';

type Entry = { width: number; height: number; widths: number[]; hash?: string };
const m = manifest as Record<string, Entry>;

export const IMAGE_BREAKPOINTS = [480, 800, 1200, 1600, 1920, 2560];

const HOME_KEYS = new Set(['home-hero', 'home-markets', 'home-trust-and-compliance']);

/** Maps NgOptimizedImage requests (src = image key) to the pre-generated WebP derivative of the nearest available width. */
export function averaImageLoader(config: ImageLoaderConfig): string {
  const e = m[config.src];
  if (!e) return config.src;
  const base = config.width ?? 1920;
  const want = Math.round(base * 1.25);
  const w = e.widths.find(x => x >= want) ?? e.widths[e.widths.length - 1];
  if (HOME_KEYS.has(config.src) && e.hash) {
    return `/images/${config.src}-${w}.${e.hash}.webp`;
  }
  const v = e.hash ? `?v=${e.hash}` : '';
  return `/images/${config.src}-${w}.webp${v}`;
}

export function imageSize(key: string): { width: number; height: number } {
  const e = m[key];
  return { width: e?.width ?? 2560, height: e?.height ?? 1440 };
}
