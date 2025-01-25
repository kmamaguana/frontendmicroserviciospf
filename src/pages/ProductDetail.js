import React from "react";
import "./ProductDetail.css";

function ProductDetail() {
  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <img
          src="https://via.placeholder.com/400"
          alt="Product"
          className="product-detail-image"
        />
        <div className="product-detail-info">
          <h1 className="product-title">Product Name</h1>
          <p className="product-description">
            This is a detailed description of the product. Highlight its
            features, quality, and benefits.
          </p>
          <p className="product-price">$49.99</p>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
