import React from 'react';
import StripeCheckout from  'react-stripe-checkout';

import './stripe-checkout.styles.scss'


const StripeCheckoutButton = ({ price }) =>{
   const priceForStripe = price* 100;
   const publishableKey = 'pk_test_51JGzKxSEkNNYwpM3UXA9Q5nnSqVJJ6b39foRbJTna5oylGjVuFsrTrrWL6IE4aShsKAqm3mbbm3U1GxUTpfuieYK00sIt1a7bh';
   const  onToken = token => {
       console.log(token)
       alert('Payment Successful')
   }

   return(
       <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image=''
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
       />
   )
}

export default StripeCheckoutButton;