import React, { useContext } from "react";
import { CartContext } from "../config/CartContext";
import "./Cart.css";

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const isEmpty = cart.length === 0;

  return (
    <div className="cart-container">
      {isEmpty ? (
        <div className="empty-cart">
          <h2>Your Cart is Empty</h2>
        </div>
      ) : (
        <div className="cart-items">
          <h2>Your Cart</h2>
          <div className="cart-item-list">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.img} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, -1, item.stock)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1, item.stock)}>+</button>
                  </div>
                </div>
                <button className="remove-item" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>
              Total: $
              {cart
                .reduce((total, item) => total + parseFloat(item.price.replace("$", "")) * item.quantity, 0)
                .toFixed(2)}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
