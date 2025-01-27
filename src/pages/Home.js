import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      

      {/* Categories Section */}
      <div className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <div className="category-card">
            <img src="https://i.pinimg.com/736x/a6/6d/c7/a66dc704795479f48641dfcff633c378.jpg" alt="Men" />
            <p>Men</p>
          </div>
          <div className="category-card">
            <img src="https://i.pinimg.com/736x/3a/63/e6/3a63e6e6de9a3b18239fbccc6ecd684a.jpg" alt="Women" />
            <p>Women</p>
          </div>
          <div className="category-card">
            <img src="https://i.pinimg.com/736x/2a/66/c1/2a66c1381c225d12ac4dc2a96a91f0ff.jpg" alt="Kids" />
            <p>Kids</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
