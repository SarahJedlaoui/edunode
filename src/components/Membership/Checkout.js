import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { PayPalButton } from 'react-paypal-button-v2';

export default function Checkout () {
  const [isPaid, setIsPaid] = useState(false);

  const onSuccess = (details, data) => {
    setIsPaid(true);
    console.log('Transaction completed by ' + details.payer.name.given_name + '!');
    console.log('See you soon!');
  };

  const onCancel = (data) => {
    console.log('Transaction cancelled!');
  };

  const onError = (err) => {
    console.error('Error!', err);
  };

  return (
    <div>
      {/** 
      {!isPaid ? (
         <PayPalButton
         options={{ vault: true }}
         createSubscription={(data, actions) => {
           return actions.subscription.create({
             plan_id: 'P-8HR49030NU824513AMJPMQFI'
           });
         }}
         onApprove={(data, actions) => {
           // Capture the funds from the transaction
           return actions.subscription.get().then(function(details) {
             // Show a success message to your buyer
             alert("Subscription completed");
 
             // OPTIONAL: Call your server to save the subscription
             return fetch("/paypal-subscription-complete", {
               method: "post",
               body: JSON.stringify({
                 orderID: data.orderID,
                 subscriptionID: data.subscriptionID
               })
             });
           });
         }}
       />
      ) : (
        <div>
          <h2>Thank you for your purchase!</h2>
          <p>We appreciate your business.</p>
        </div>
      )}*/}
    </div>
  );
};




