import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">Categories</h3>
      <ul className="category-list">
        <li className="category-item">
          <span className="category-icon">👕</span>
          Men
        </li>
        <li className="category-item">
          <span className="category-icon">👗</span>
          Women
        </li>
        <li className="category-item">
          <span className="category-icon">🍼</span>
          Kids
        </li>
        <li className="category-item">
          <span className="category-icon">🎒</span>
          Accessories
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
