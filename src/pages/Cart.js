import React from "react";
import "./Cart.css";

function Cart() {
  const isEmpty = false; // Cambiar a true para probar el carrito vacío

  // Productos en el carrito (ejemplo)
  const cartItems = [
    { id: 1, name: "T-Shirt", price: 19.99, image: "https://via.placeholder.com/100" },
    { id: 2, name: "Jeans", price: 39.99, image: "https://via.placeholder.com/100" },
    { id: 3, name: "Jacket", price: 59.99, image: "https://via.placeholder.com/100" }
  ];

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
          <div className="cart-item-list">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>${item.price.toFixed(2)}</p>
                </div>
                <button className="remove-item">Remove</button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</h3>
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
