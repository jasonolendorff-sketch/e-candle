import { useEffect } from 'react';
import { LIVE_URL, LIVE_TITLE, SCROLL_ON_OPEN } from '@/constants';

export default function LiveView({ onClose }) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (!SCROLL_ON_OPEN) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  return (
    <div className="overlay" role="dialog" aria-modal="true">
      <div className="overlay-content">
        <div className="overlay-header">
          <strong>{LIVE_TITLE}</strong>
          <button className="close" onClick={onClose} aria-label="Close live view">Close</button>
        </div>
        <iframe className="live-frame" src={LIVE_URL} title={LIVE_TITLE} allow="autoplay; fullscreen" />
      </div>
    </div>
  );
}
