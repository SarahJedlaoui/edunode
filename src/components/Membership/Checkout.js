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
      {!isPaid ? (
        <PayPalButton
          amount="0.29"
          currency="USD"
          onSuccess={onSuccess}
          onCancel={onCancel}
          onError={onError}
        />
      ) : (
        <div>
          <h2>Thank you for your purchase!</h2>
          <p>We appreciate your business.</p>
        </div>
      )}
    </div>
  );
};




