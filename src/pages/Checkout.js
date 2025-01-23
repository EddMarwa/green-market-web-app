// src/pages/Checkout.js
import React, { useState } from 'react';

const Checkout = () => {
  const [orderStatus, setOrderStatus] = useState('In Progress');
  const [paymentInfo, setPaymentInfo] = useState('');

  const handleCheckout = () => {
    setOrderStatus('Completed');
    alert('Order placed successfully!');
  };

  return (
    <div>
      <h2>Checkout</h2>
      <p>Order Status: {orderStatus}</p>
      <form onSubmit={handleCheckout}>
        <input
          type="text"
          value={paymentInfo}
          onChange={(e) => setPaymentInfo(e.target.value)}
          placeholder="Payment Information"
          required
        />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
