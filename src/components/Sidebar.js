import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../config/authContext"; // Asegúrate de ajustar la ruta del contexto
import "./Sidebar.css";

const Sidebar = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const { userToken, signOut } = useContext(AuthContext); // Extraemos userToken y signOut del contexto
  const navigate = useNavigate();

  const categories = [
    { name: "Men", icon: "👕" },
    { name: "Women", icon: "👗" },
    { name: "Kids", icon: "🎀" },
    { name: "Accessories", icon: "🎒" },
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    // Aquí puedes agregar la lógica para filtrar los productos según la categoría seleccionada
  };

  const handleLogout = () => {
    signOut(navigate); // Llamamos al método de cerrar sesión
  };

  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">Categories</h3>
      <ul className="category-list">
        {categories.map((category) => (
          <li
            key={category.name}
            className={`category-item ${activeCategory === category.name ? "active" : ""}`}
            onClick={() => handleCategoryClick(category.name)}
          >
            <span className="category-icon">{category.icon}</span>
            {category.name}
          </li>
        ))}
      </ul>
      {/* Botón de cerrar sesión: solo se muestra si existe un userToken */}
      {userToken && (
        <button className="logout-button" onClick={handleLogout}>
          Log Out
        </button>
      )}
    </aside>
  );
};

export default Sidebar;
