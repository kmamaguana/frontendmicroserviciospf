import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Logo y nombre de la empresa */}
        <Link to="/" className="logo-container">
          <img src="logoc.jpg" alt="Logo" className="logo" />
          <h1 className="company-name">
            <span className="highlight-lila"></span>
            <span className="highlight-lila-light"> FashionHub</span>
          </h1>
        </Link>

        {/* Barra de búsqueda */}
        <input
          type="text"
          placeholder="Search for products..."
          className="search-bar"
        />

        {/* Menú de navegación */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
