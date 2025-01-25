import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>
      <form className="checkout-form">
        <label>
          Full Name
          <input type="text" placeholder="John Doe" required />
        </label>
        <label>
          Address
          <input type="text" placeholder="123 Main St" required />
        </label>
        <label>
          Credit Card Number
          <input type="text" placeholder="1111 2222 3333 4444" required />
        </label>
        <button type="submit" className="checkout-submit">
          Complete Purchase
        </button>
      </form>
    </div>
  );
}

export default Checkout;
