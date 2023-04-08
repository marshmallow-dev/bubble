import React, { useEffect, useState } from 'react'
import { api } from '~/utils/api'
import { useMutation } from '@tanstack/react-query'
import StripeContainer from '../Payments/StripeContainer'

type price={
    from:string,
    amount:string,
    to:string
}
export default function Buy() {
    const {mutate,isSuccess,isError,error,data,isLoading} = api.price.convertPrice.useMutation()
    const userQuery = api.price.latestPrice.useQuery({from:"bnb",amount:"1",to:"usdt"}as  price)
    const [latestPrice, setlatestPrice]= useState(0)
    
    
    useEffect(() => {
        if(isSuccess){
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            setlatestPrice(data.price)
            console.log(data.price)
        }
    }, [isSuccess])

    useEffect(()=>{
        if(isError){
            console.log({error})
        }
        
        if(isLoading){
            console.log("data is Loading ....")
        }
    })
    

    console.log(userQuery.data?.price)
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
    const {name,value}:any=e.target
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    mutate({from:value})
  }} className="select select-bordered">
    <option disabled selected>Pick Crypto</option>
    <option>BTC</option>
    <option>ETH</option>
    <option>EOS</option>
    <option>AVAX</option>
    <option>SOLANA</option>
    <option>CARDANO</option>
  </select>
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Amount of Crypto to be gotten</span>
  </label>
  <input disabled type="text" placeholder="0.3444559" value={latestPrice} className="input input-bordered w-full max-w-xs" />
</div>

    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
    </div>
    <div>
        <StripeContainer/>
    </div>
  </div>
  )
}
