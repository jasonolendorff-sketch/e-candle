/**
 * Tunable constants for transitions and behavior
 */
export const FADE_DURATION_MS = 600;          // duration of fade animations
export const OVERLAP_MS = 150;                // overlap between fade out/in
export const AUTO_OPEN_LIVE = false;          // auto open live view after mount
export const SCROLL_ON_OPEN = false;          // keep false to avoid background scroll
export const LIVE_VIEW_URL = process.env.NEXT_PUBLIC_LIVE_VIEW_URL || "https://example.com/your-camera-stream";
export const LIVE_VIEW_TITLE = "Live E‑Candle";
