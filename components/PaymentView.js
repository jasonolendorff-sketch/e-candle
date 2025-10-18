export default function PaymentView({ onGoLive }){
  return (
    <div className="container">
      <div className="card">
        <h1 style={{marginTop:0}}>Support & Light a Candle</h1>
        <p>When you complete a test "donation", we’ll fade into the live wall of lights without moving or zooming the background.</p>
        <div className="grid" style={{marginTop:16}}>
          <div className="card">
            <h3 style={{marginTop:0}}>Test Payment</h3>
            <p>This button simulates your payment callback.</p>
            <button className="button" onClick={onGoLive}>Simulate Payment → Go Live</button>
          </div>
          <div className="card">
            <h3 style={{marginTop:0}}>Notes</h3>
            <ul>
              <li>Header is sticky and height‑aware.</li>
              <li>Live view fades in centered (no auto scroll).</li>
              <li>Background never scales during crossfade.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
