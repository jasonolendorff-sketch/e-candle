import { FADE_MS } from '@/constants';

export default function PaymentView({ fadingOut, onContinue }) {
  return (
    <div className="card" style={{ transition:`opacity ${FADE_MS}ms ease`, opacity: fadingOut?0:1 }}>
      <h1 style={{ marginTop: 0 }}>Support the Lights</h1>
      <p>Make an offering to open the live view overlay. Background won’t scale; scrolling is locked.</p>
      <div style={{ display:'grid', gap:12, marginTop:16 }}>
        <label>Name<br/><input type="text" placeholder="Your name" className="input"/></label>
        <label>Intention (optional)<br/><input type="text" placeholder="Prayer / intention" className="input"/></label>
        <button className="btn primary" onClick={onContinue}>Continue to Live View</button>
        <p style={{ opacity:.7, fontSize:12 }}>
          Configure <code>NEXT_PUBLIC_LIVE_VIEW_URL</code> in your environment.
        </p>
      </div>
    </div>
  );
}
