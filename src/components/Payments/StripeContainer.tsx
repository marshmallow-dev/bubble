import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe} from "@stripe/stripe-js"
import PaymentModal from './PaymentModal'

const Public_key="pk_test_51MhxL5EQvcsnT3Wvg1CZvFcHsefDz7jrhRRpmKCxKDTb8eYWWQzpDzDmxSjVba6dX9TTsJucTZxc7gby7rMqM7F600gfm2aXw3"
const stripeTestPromise=loadStripe(Public_key)
export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
			<PaymentModal />
		</Elements>
  )
}
