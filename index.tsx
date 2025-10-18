import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import LiveView from '../components/LiveView';
import { FADE_DURATION_MS, OVERLAP_MS, AUTO_OPEN_LIVE } from '../lib/config';

export default function HomePage() {
  const [showLive, setShowLive] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);
  const paymentRef = useRef<HTMLDivElement>(null);

  // optional auto-open for testing
  useEffect(() => {
    if (AUTO_OPEN_LIVE) openLive();
  }, []);

  function openLive() {
    // trigger fade out of payment card, then open overlay with slight overlap
    setFadingOut(true);
    window.setTimeout(() => setShowLive(true), Math.max(0, FADE_DURATION_MS - OVERLAP_MS));
  }

  function closeLive() {
    setShowLive(false);
    // fade-in of payment card happens automatically via CSS class toggle
    setFadingOut(false);
    paymentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return (
    <div>
      <style jsx global>{`
        :root { --fade-ms: ${FADE_DURATION_MS}ms; }
      `}</style>

      <Header />

      <main className="container">
        <div
          ref={paymentRef}
          className="card"
          style={{ 
            transition: `opacity ${FADE_DURATION_MS}ms ease`,
            opacity: fadingOut ? 0 : 1 
          }}
        >
          <h1 style={{ marginTop: 0 }}>Support the Lights</h1>
          <p>
            Make an offering to light an e‑candle. When you continue, the live view will fade in
            full‑screen and stay centered. The background will not scale or scroll.
          </p>

          {/* fake payment form */}
          <div style={{ display: 'grid', gap: 12, marginTop: 16 }}>
            <label>
              Name<br/>
              <input type="text" placeholder="Your name" style={inputStyle}/>
            </label>
            <label>
              Intention (optional)<br/>
              <input type="text" placeholder="Prayer / intention" style={inputStyle}/>
            </label>
            <button className="btn primary" onClick={openLive}>Continue to Live View</button>
            <p style={{ opacity:.7, fontSize:12 }}>
              Tip: set <code>NEXT_PUBLIC_LIVE_VIEW_URL</code> in your environment for your camera stream.
            </p>
          </div>
        </div>
      </main>

      {showLive && <LiveView onClose={closeLive} />}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  background:'#0b0c10',
  color:'#e5e7eb',
  border:'1px solid #374151',
  borderRadius:12,
  padding:'10px 12px'
};
