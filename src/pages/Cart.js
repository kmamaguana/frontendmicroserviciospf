import React, { useContext } from "react";
import { CartContext } from "../config/CartContext";
import "./Cart.css";

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const isEmpty = cart.length === 0;

  const handleQuantityChange = (id, change, stock) => {
    if (change === -1 && cart.find(item => item.id === id).quantity === 1) return; // Prevent quantity below 1
    if (cart.find(item => item.id === id).quantity < stock || change === -1) {
      updateQuantity(id, change, stock);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace("$", "")) * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      {isEmpty ? (
        <div className="empty-cart">
          <h2>Your Cart is Empty</h2>
          <button>Sign in</button>
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
                  <p>${parseFloat(item.price.replace("$", "")).toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button onClick={() => handleQuantityChange(item.id, -1, item.stock)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, 1, item.stock)}>+</button>
                  </div>
                </div>
                <button className="remove-item" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ${calculateTotal()}</h3>
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
