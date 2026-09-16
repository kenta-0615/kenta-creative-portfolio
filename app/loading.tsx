export default function Loading() {
  return <main aria-live="polite" aria-busy="true" style={{minHeight:"100vh",display:"grid",placeItems:"center",background:"#f2f0ea",color:"#111",fontFamily:'"Helvetica Neue","Noto Sans JP",Arial,sans-serif'}}>
    <div style={{display:"grid",gap:"18px",justifyItems:"center"}}>
      <span style={{width:"44px",height:"44px",display:"grid",placeItems:"center",borderRadius:"50%",background:"#111",color:"#d9ff43",fontWeight:900}}>K</span>
      <p style={{margin:0,fontSize:"13px",fontWeight:800,letterSpacing:".12em"}}>LOADING PAGE</p>
    </div>
  </main>;
}
