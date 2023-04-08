/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useState } from 'react'
import { api } from '~/utils/api'

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function PaymentModal({amountToBuy,CryptoType}) {
    const {mutate,isSuccess,isError,data,isLoading}=api.payment.buy.useMutation()
    const [success, setSuccess ] = useState(false)
    const [walletToReceive,setWalletToRecieve]=useState("")
    const stripe = useStripe()
    const elements = useElements()
    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


    if(!error) {
        try {
            const {id} = paymentMethod
            mutate({amount:"1000",id:id})
            if(isSuccess) {
                console.log("Successful payment")
                setSuccess(true)
            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}
  return (
    <>
    {!success ?
    <>
    <form className='py-7  px-7 flex flex-col my-8 card card-body bg-slate-600 ' onSubmit={handleSubmit}>
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Wallet to Recieve Crypto</span>
  </label>
  <input onChange={(e)=>setWalletToRecieve(e.target.value)}  type="text" placeholder="0x0000000"  className="input input-bordered w-full max-w-xs" />
</div>
            <fieldset className="FormGroup">
                <div className=''>
                    <CardElement />
                </div>
            </fieldset>
            <button className='btn my-5'>{data?"submit":"Pay"}</button>
        </form>
        </>:
        <div className='  py-7  px-7 flex flex-col my-8 card card-body bg-slate-600'>
           <h2>You just bought{data?"  "+data.amountPurchase+" "+" worth  of  Eth":""} </h2>
           <h2>{data?data.cryptoBought+" "+"sent":""} </h2>
       </div>
    }
    </>
  )
}
