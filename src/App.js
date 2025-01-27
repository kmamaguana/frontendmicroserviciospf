import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home";
import Cart from "./pages/Cart";  // Nueva ruta para el carrito
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <Navbar />

        {/* Main Layout */}
        <div className="main-layout">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} /> {/* Ruta del carrito */}
            </Routes>
          </main>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
