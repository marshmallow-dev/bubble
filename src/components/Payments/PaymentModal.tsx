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

export default function PaymentModal() {
    const {mutate,isSuccess,isError,data,isLoading}=api.payment.buy.useMutation()
    const [success, setSuccess ] = useState(false)
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
    <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button>Pay</button>
        </form>
        </>:
        <div>
           <h2>You just bought a sweet spatula congrats this is the best decision of you're life</h2>
       </div>
    }
    </>
  )
}
