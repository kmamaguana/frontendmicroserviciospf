import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="logo-container">
          <img src="logoc.jpg" alt="Logo" className="logo" />
          <h1 className="company-name">
            <span className="highlight-lila"></span>
            <span className="highlight-lila-light"> FashionHub</span>
          </h1>
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
