/**
 * Central place to tune UI behavior without digging into components.
 * Adjust and redeploy; Vercel will pick up changes automatically.
 */
export const UI = {
  // Fade timings (ms)
  PAYMENT_FADE_OUT_MS: 500,
  LIVE_FADE_IN_MS: 600,

  // Overlap between fades (ms). Live begins this long after payment starts fading.
  CROSSFADE_OVERLAP_MS: 250,

  // If you want the live view to auto-dismiss back to payment after a while.
  AUTO_RETURN_TO_PAYMENT_MS: 0, // 0 = disabled

  // Scroll behavior for safety (shouldn’t be needed because we center via CSS)
  SCROLL_TO_CENTER: false,

  // Sticky header height (px). If you pin a header, put its height here so the live view centers under it.
  STICKY_HEADER_HEIGHT_PX: 64,

  // Live view iframe/video source (demo placeholder)
  LIVE_VIEW_SRC: process.env.NEXT_PUBLIC_LIVE_VIEW_SRC || "https://www.youtube.com/embed/21X5lGlDOfg?autoplay=1&mute=1",

  // API endpoint example
  API_HEARTBEAT: process.env.NEXT_PUBLIC_API_HEARTBEAT || "/api/heartbeat"
};
