# e‑Candle (Next.js quick test)

A minimal Next.js project you can deploy on **Vercel** to test the payment → live view transition with clean crossfade and a sticky header.

## Tunable Constants
Edit `constants.js`:
```js
export const UI = {
  PAYMENT_FADE_OUT_MS: 500,
  LIVE_FADE_IN_MS: 600,
  CROSSFADE_OVERLAP_MS: 250,
  AUTO_RETURN_TO_PAYMENT_MS: 0,
  SCROLL_TO_CENTER: false,
  STICKY_HEADER_HEIGHT_PX: 64,
  LIVE_VIEW_SRC: process.env.NEXT_PUBLIC_LIVE_VIEW_SRC || "https://www.youtube.com/embed/21X5lGlDOfg?autoplay=1&mute=1",
  API_HEARTBEAT: process.env.NEXT_PUBLIC_API_HEARTBEAT || "/api/heartbeat"
}
```

## Local dev
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy to Vercel
1. Push to GitHub.
2. Import the repo at https://vercel.com/new .
3. No special settings needed. (Framework = Next.js)

## Env Vars (optional)
- `NEXT_PUBLIC_LIVE_VIEW_SRC` — replace the iframe source with your camera feed.
- `NEXT_PUBLIC_API_HEARTBEAT` — external API URL if needed.

## Notes
- Live overlay is **fixed & centered under the sticky header**, so the background **never scales** during transition.
- No auto-scroll; you can toggle `SCROLL_TO_CENTER` if desired.
- All timings are centrally controlled.
