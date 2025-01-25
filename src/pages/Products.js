import React from "react";
import "./Products.css";

function Products() {
  return (
    <div className="products-container">
      {/* Filters */}
      <aside className="filters">
        <h3>Filters</h3>
        <label>
          <input type="checkbox" />
          Men
        </label>
        <label>
          <input type="checkbox" />
          Women
        </label>
        <label>
          <input type="checkbox" />
          Kids
        </label>
      </aside>

      {/* Product Grid */}
      <section className="product-grid">
        {[...Array(12)].map((_, index) => (
          <div key={index} className="product-card">
            <img src="https://via.placeholder.com/200" alt="Product" />
            <h4>Product {index + 1}</h4>
            <p>$19.99</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Products;
