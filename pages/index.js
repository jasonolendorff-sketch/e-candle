import { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import PaymentView from '@/components/PaymentView';
import LiveView from '@/components/LiveView';
import { FADE_MS, OVERLAP_MS, AUTO_OPEN } from '@/constants';

export default function HomePage() {
  const [showLive, setShowLive] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);
  const paymentRef = useRef(null);

  useEffect(() => { if (AUTO_OPEN) openLive(); }, []);

  function openLive() {
    setFadingOut(true);
    setTimeout(() => setShowLive(true), Math.max(0, FADE_MS - OVERLAP_MS));
  }
  function closeLive() {
    setShowLive(false);
    setFadingOut(false);
    paymentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return (
    <div>
      <style jsx global>{`:root { --fade-ms: ${FADE_MS}ms; }`}</style>
      <Header />
      <main className="container">
        <div ref={paymentRef}>
          <PaymentView fadingOut={fadingOut} onContinue={openLive} />
        </div>
      </main>
      {showLive && <LiveView onClose={closeLive} />}
    </div>
  );
}
