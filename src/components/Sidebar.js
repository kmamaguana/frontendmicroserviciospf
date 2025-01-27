import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    { name: "Men", icon: "👕" },
    { name: "Women", icon: "👗" },
    { name: "Kids", icon: "🎀" },
    { name: "Accessories", icon: "🎒" }
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    // Aquí puedes agregar la lógica para filtrar los productos según la categoría seleccionada
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
    </aside>
  );
};

export default Sidebar;
