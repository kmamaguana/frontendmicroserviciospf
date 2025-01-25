import React from "react";
import "./Cart.css";

function Cart() {
  const isEmpty = true; // Cambiar a false para probar con productos

  return (
    <div className="cart-container">
      {isEmpty ? (
        <div className="empty-cart">
          <h2>Your Cart is Empty</h2>
          <p>Sign in to see items in your cart</p>
          <button>Sign in</button>
        </div>
      ) : (
        <div className="cart-items">
          <h2>Your Cart</h2>
          <div className="cart-item">
            <img src="https://via.placeholder.com/100" alt="Product" />
            <div>
              <h4>Product Name</h4>
              <p>$19.99</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
