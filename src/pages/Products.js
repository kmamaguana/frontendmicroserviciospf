import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

// Datos quemados de productos
const products = [
  { 
    id: 1, 
    name: "Buso", 
    price: "$19.99", 
    img: "https://i.pinimg.com/1200x/fd/c5/9b/fdc59b921dea94ef3584d9331f9c2758.jpg" 
  },
  { 
    id: 2, 
    name: "Corset", 
    price: "$29.99", 
    img: "https://i.pinimg.com/1200x/bd/4b/51/bd4b51f88e346b90eb3eb75794ab6ff4.jpg" 
  },
  { 
    id: 3, 
    name: "Conjunto", 
    price: "$24.99", 
    img: "https://i.pinimg.com/1200x/1d/26/5f/1d265f711c43784d5d3e339179c17370.jpg" 
  },
  { 
    id: 4, 
    name: "Conjunto Verano", 
    price: "$14.99", 
    img: "https://i.pinimg.com/1200x/68/ce/d1/68ced116b4d22e2c2134f52ebce497a8.jpg" 
  },
  { 
    id: 5, 
    name: "Camisa", 
    price: "$39.99", 
    img: "https://img.fantaskycdn.com/0043eb62938f3733ff533a785fdb9c1c_2056x.jpeg" 
  },
  { 
    id: 6, 
    name: "Conjunto Hombre", 
    price: "$49.99", 
    img: "https://i.pinimg.com/1200x/9d/b1/14/9db114c846bcae1f864ad591d9515bd6.jpg" 
  },
  { 
    id: 7, 
    name: "Pantalón Hombre", 
    price: "$19.99", 
    img: "https://i.pinimg.com/736x/ed/3d/d8/ed3dd8e383f40bf44689e8863aea5048.jpg" 
  },
  { 
    id: 8, 
    name: "Conjunto Niño", 
    price: "$9.99", 
    img: "https://i.pinimg.com/736x/a4/9c/15/a49c15c204acb979e5e324f6111c9292.jpg" 
  },
  { 
    id: 9, 
    name: "Vestido Niña", 
    price: "$59.99", 
    img: "https://i.pinimg.com/736x/09/64/08/096408317a3f4787e07d215002357fa2.jpg" 
  },
  { 
    id: 10, 
    name: "Conjunto Niña", 
    price: "$69.99", 
    img: "https://i.pinimg.com/736x/21/66/4d/21664d3351ffb7b2a64a332adab3214e.jpg" 
  },
  { 
    id: 11, 
    name: "Terno de hombre", 
    price: "$39.99", 
    img: "https://i.pinimg.com/1200x/29/5e/ef/295eeff4cda613d57734cee4d9baec4b.jpg" 
  },
  { 
    id: 12, 
    name: "Terno de Mujer", 
    price: "$49.99", 
    img: "https://i.pinimg.com/1200x/b9/bf/a6/b9bfa667862876df265dbfc578d7ccb9.jpg" 
  },
];

function Products() {
  return (
    <div className="products-container">
      {/* Filtros */}
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

      {/* Lista de productos */}
      <section className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <img src={product.img} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.price}</p>
            </Link>
            <button>Add to Cart</button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Products;
