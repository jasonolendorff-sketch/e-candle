export const FADE_MS = parseInt(process.env.NEXT_PUBLIC_FADE_MS || '600', 10);
export const OVERLAP_MS = parseInt(process.env.NEXT_PUBLIC_OVERLAP_MS || '150', 10);
export const AUTO_OPEN = (process.env.NEXT_PUBLIC_AUTO_OPEN || 'false') === 'true';
export const SCROLL_ON_OPEN = (process.env.NEXT_PUBLIC_SCROLL_ON_OPEN || 'false') === 'true';
export const LIVE_URL = process.env.NEXT_PUBLIC_LIVE_VIEW_URL || 'https://example.com/your-camera-stream';
export const LIVE_TITLE = process.env.NEXT_PUBLIC_LIVE_VIEW_TITLE || 'Live E‑Candle';
