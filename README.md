# E‑Candle Next.js Starter (Clean Rebuild)

A minimal Next.js 14 project with:
- Sticky header (does **not** block centering)
- Payment card fades out, then a **full‑screen live view overlay** fades in
- Background **does not scale** and scrolling is locked while live is open
- **Tunable constants** in `lib/config.ts`

## Quick start

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Configuration

Edit `lib/config.ts`:
- `FADE_DURATION_MS` – how long fades take
- `OVERLAP_MS` – how much the live view appears before payment is fully faded out
- `AUTO_OPEN_LIVE` – set `true` to auto open the live overlay for testing
- `SCROLL_ON_OPEN` – keep `false` so background doesn't move
- `LIVE_VIEW_TITLE` – overlay header text

Set the camera stream URL at runtime:

```bash
# example
NEXT_PUBLIC_LIVE_VIEW_URL="https://your-camera-or-live-site" npm run dev
```

Or add it to your Vercel Project > Settings > Environment Variables.

## Deploy

```bash
npm run build
npm start
```

For Vercel: create a new project from this folder. Ensure Node 18+ and set `NEXT_PUBLIC_LIVE_VIEW_URL` in the Project Settings.
