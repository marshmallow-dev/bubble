import React from 'react'

export default function Sell() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl ">
<figure><img src="https://res.cloudinary.com/daniel23/image/upload/v1680942757/WhatsApp_Image_2023-02-25_at_22.10.05_insl2w.jpg" alt="Shoes" /></figure>
    <div className="card-body">
    <h2 className="card-title">Buy Crypto With Credit card</h2>
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Amount to Purchase</span>
    <span className="label-text-alt">Tax fee:0.02%</span>
  </label>
  <input type="text" placeholder="50.00" className="input input-bordered w-full max-w-xs" />
</div>

<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Select Crypto to buy</span>
    <span className="label-text-alt">BTC</span>
  </label>
  <select onChange={(e)=>{
    const {value}=e.target
    
   
  }} className="select select-bordered">
    <option disabled selected>Pick Crypto</option>
    <option>BTC</option>
    <option>ETH</option>
    <option>EOS</option>
    <option>AVAX</option>
    <option>SOLANA</option>
    <option>CARDANO</option>
    <option>fantom</option>
  </select>
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Amount of Crypto to be gotten</span>
  </label>
  <input disabled type="text" placeholder="0.3444559" value={0} className="input input-bordered w-full max-w-xs" />
</div>

    <div className="card-actions justify-end">
      <button  className="btn btn-primary">Buy Now</button>
    </div>
    </div>  
  </div>
  )
}
