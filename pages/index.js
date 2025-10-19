import { useEffect, useMemo, useRef, useState } from 'react'
import Header from '@/components/Header'
import PaymentView from '@/components/PaymentView'
import LiveView from '@/components/LiveView'
import { UI } from '@/constants'

export default function Home(){
  const [showLive, setShowLive] = useState(false)
  const [fading, setFading] = useState(false)
  const timers = useRef([])

  const cssVars = useMemo(()=>({
    '--payment-fade': UI.PAYMENT_FADE_OUT_MS + 'ms',
    '--live-fade': UI.LIVE_FADE_IN_MS + 'ms',
    '--sticky-header': `calc(${UI.STICKY_HEADER_HEIGHT_PX}px)`,
  }), [])

  useEffect(()=>{
    return ()=> { timers.current.forEach(clearTimeout) }
  }, [])

  const goLive = ()=>{
    // Start fading out payment
    setFading(true)

    // Stagger the live overlay to create crossfade without moving/zooming the background
    timers.current.push(setTimeout(()=>{
      setShowLive(true)
    }, Math.max(0, UI.CROSSFADE_OVERLAP_MS)))

    // Optional: auto return to payment after some time
    if(UI.AUTO_RETURN_TO_PAYMENT_MS > 0){
      timers.current.push(setTimeout(()=>{
        setShowLive(false)
        setFading(false)
      }, UI.AUTO_RETURN_TO_PAYMENT_MS))
    }
  }

  // Never scroll/zoom background; we keep overlay fixed and centered under sticky header
  useEffect(()=>{
    if(UI.SCROLL_TO_CENTER && showLive){
      const y = UI.STICKY_HEADER_HEIGHT_PX + (window.innerHeight - UI.STICKY_HEADER_HEIGHT_PX - 400)/2
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' })
    }
  }, [showLive])

  return (
    <div className="no-background-scale" style={cssVars}>
      <Header/>
      <main className="stage">
        <section className={`payment-layer ${fading ? 'fading' : ''}`} aria-hidden={showLive}>
          <PaymentView onGoLive={goLive} />
          <div className="container" style={{paddingBottom:'30vh'}}>
            <div className="card">
              <h3 style={{marginTop:0}}>Demo Content</h3>
              <p>Extra content so you can scroll the page and prove the overlay doesn’t depend on scroll position.</p>
            </div>
          </div>
        </section>

        <div className={`live-overlay ${showLive ? 'visible' : ''}`}>
          {showLive && <LiveView/>}
        </div>
      </main>
    </div>
  )
}
