import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-banner">
        <h1>Welcome to FashionHub</h1>
        <p>Discover the latest trends in fashion</p>
        <button>Shop Now</button>
      </div>

      {/* Categories Section */}
      <div className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <div className="category-card">
            <img src="https://via.placeholder.com/200" alt="Men" />
            <p>Men</p>
          </div>
          <div className="category-card">
            <img src="https://via.placeholder.com/200" alt="Women" />
            <p>Women</p>
          </div>
          <div className="category-card">
            <img src="https://via.placeholder.com/200" alt="Kids" />
            <p>Kids</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
