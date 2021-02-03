import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from 'react-bootstrap';
import api from "../../api/ApiHelper";

const stripePromise = loadStripe(
  "pk_test_51I6N5ZIIRKr1p7dQOGhRRigwIMqgZ3XnoBdbfezFNFgLiR9iaW2YzkRP9kAADCzxSOnqLeqKDVxglDh5uxvY28Dn00vAZR7wQ9"
);

const PAYMENT_METHOD = "https://play.google.com/billing";

const logPromise: Promise<void> | null = null;

function Payment() {

  let [message, _setMessage] = useState('');

  const setMessage = (newMessage: string) => {
    if (message !== newMessage) {
      message = newMessage;
      _setMessage(message);
    }
  }

  const log = (msg: string) => {
    let newString = message + '\n' + msg;
    setMessage(newString);
  }

  const googleId = () => {
    return localStorage.getItem('googleId');
  }

  const checkPaymentPossible = (): boolean => {
    if (!window.PaymentRequest) {
      log("No PaymentRequest object.");
      return false;
    }
    return true;
  }

  const pay = () => {
  }

  const onPay = () => {

    let paymentPossible = checkPaymentPossible()

    if (paymentPossible) {
      log('payment is possible')
      log('Going to pay..');
      pay()
    } else {
      log('dont know how to pay..')
    }

  }

  const clearMessages = () => {
    setMessage('');
  }


  return (
    <div>
      <Button className="btn-success" onClick={onPay}>
        Buy Premium
    </Button>
      <Button className="btn-success" onClick={clearMessages}>
        Clear Messages
    </Button>
      <pre>
        {message}
      </pre>
    </div>
  )
}

export default Payment;