import { UI } from '@/constants'

export default function LiveView(){
  return (
    <div className="live-card" role="dialog" aria-label="Live e‑Candle View">
      <iframe
        src={UI.LIVE_VIEW_SRC}
        title="Live View"
        frameBorder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
