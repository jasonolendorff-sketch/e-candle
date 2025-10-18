import React, { useEffect } from 'react';
import { LIVE_VIEW_URL, LIVE_VIEW_TITLE, SCROLL_ON_OPEN } from '../lib/config';

type Props = { onClose: () => void; };

export default function LiveView({ onClose }: Props) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (!SCROLL_ON_OPEN) document.body.style.overflow = 'hidden'; // lock background
    return () => { document.body.style.overflow = prev; };
  }, []);

  return (
    <div className="overlay" role="dialog" aria-modal="true">
      <div className="overlay-content">
        <div className="overlay-header">
          <strong>{LIVE_VIEW_TITLE}</strong>
          <button className="close" onClick={onClose} aria-label="Close live view">Close</button>
        </div>
        {/* Use iframe so the page behind doesn't reflow/scale */}
        <iframe className="live-frame" src={LIVE_VIEW_URL} title={LIVE_VIEW_TITLE} allow="autoplay; fullscreen" />
      </div>
    </div>
  );
}
