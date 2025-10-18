# E‑Candle (Static, Zero‑Build)

This version requires **no Node, no Next.js, no build**. Drag/drop to Vercel or any static host.

## Use
1) Open `config.js` and set `LIVE_VIEW_URL` and `LIVE_VIEW_TITLE`.
2) Deploy the folder to Vercel as a **Static Project** (vercel.json included), or serve locally:
   ```bash
   npx serve .
   # open http://localhost:3000
   ```
3) Click **Continue to Live View**; payment card fades out; overlay shows your stream.

## Tunables
- `FADE_DURATION_MS`, `OVERLAP_MS` in `config.js`.
