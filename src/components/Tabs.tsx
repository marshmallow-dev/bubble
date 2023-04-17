import React, { useState } from 'react'
import Link from 'next/link'
export default function Tabs() {
    const [active, setActiveState] = useState(true)
    const inActiveTab="tab tab-bordered";
    const ActiveTab="tab tab-bordered tab-active"
  return (
   <>
<div className="tabs justify-center align-middle">
  <Link onClick={()=>setActiveState(true)} href="?tx=buy" className={active && ActiveTab}>Buy</Link> 
  <Link onClick={()=>setActiveState(false)} href="?tx=sell" className={!active && ActiveTab}>Sell</Link>
</div>
</>
  )
}
