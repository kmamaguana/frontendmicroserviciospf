import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import "./MainContent.css";

const MainContent = () => {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
  );
};

export default MainContent;
