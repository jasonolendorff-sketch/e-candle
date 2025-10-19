# E‑Candle — Next.js (JS) with "@/alias"

Fixes your Webpack errors by:
- Adding `jsconfig.json` with `@/*` → project root
- Providing all files you imported: `@/styles/globals.css`, `@/components/Header`, `@/components/PaymentView`, `@/components/LiveView`, and `@/constants`

## Run
```bash
npm install
npm run dev
```

## Env vars (optional)
`NEXT_PUBLIC_LIVE_VIEW_URL`, `NEXT_PUBLIC_LIVE_VIEW_TITLE`, `NEXT_PUBLIC_FADE_MS`, `NEXT_PUBLIC_OVERLAP_MS`, `NEXT_PUBLIC_AUTO_OPEN`, `NEXT_PUBLIC_SCROLL_ON_OPEN`
