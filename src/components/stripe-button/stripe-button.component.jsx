import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51ImwMSSF8F3ysptPAx81YJUE6KQEHAcnDJP8O7sswS99KsCqUJGWWA82fjElmbALK31oo7kt55efsY7b4gfTmUZG00A9WyujDC';
  
    const onToken = token => {
    //   console.log(token); ------> we send this token in backend for details reated payment 
      alert('Payment Succesful!');
    };
  
    return (
      <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
    );
  };
  
  export default StripeCheckoutButton;
