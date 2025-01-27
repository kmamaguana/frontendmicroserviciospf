import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

// Datos quemados: Lista completa de productos
const products = [
  { 
    id: 1, 
    name: "Buso", 
    price: "$19.99", 
    description: "Un buso cómodo y moderno para cualquier ocasión.", 
    img: "https://i.pinimg.com/1200x/fd/c5/9b/fdc59b921dea94ef3584d9331f9c2758.jpg" 
  },
  { 
    id: 2, 
    name: "Corset", 
    price: "$29.99", 
    description: "Un corset elegante y estilizado para un look especial.", 
    img: "https://i.pinimg.com/1200x/bd/4b/51/bd4b51f88e346b90eb3eb75794ab6ff4.jpg" 
  },
  { 
    id: 3, 
    name: "Conjunto", 
    price: "$24.99", 
    description: "Conjunto casual perfecto para el día a día.", 
    img: "https://i.pinimg.com/1200x/1d/26/5f/1d265f711c43784d5d3e339179c17370.jpg" 
  },
  { 
    id: 4, 
    name: "Conjunto Verano", 
    price: "$14.99", 
    description: "Ligero y fresco para los días más cálidos.", 
    img: "https://i.pinimg.com/1200x/68/ce/d1/68ced116b4d22e2c2134f52ebce497a8.jpg" 
  },
  { 
    id: 5, 
    name: "Camisa", 
    price: "$39.99", 
    description: "Camisa clásica, ideal para un look profesional.", 
    img: "https://img.fantaskycdn.com/0043eb62938f3733ff533a785fdb9c1c_2056x.jpeg" 
  },
  { 
    id: 6, 
    name: "Conjunto Hombre", 
    price: "$49.99", 
    description: "Un conjunto casual y cómodo para hombres.", 
    img: "https://i.pinimg.com/1200x/9d/b1/14/9db114c846bcae1f864ad591d9515bd6.jpg" 
  },
  { 
    id: 7, 
    name: "Pantalón Hombre", 
    price: "$19.99", 
    description: "Pantalón moderno y versátil para hombres.", 
    img: "https://i.pinimg.com/736x/ed/3d/d8/ed3dd8e383f40bf44689e8863aea5048.jpg" 
  },
  { 
    id: 8, 
    name: "Conjunto Niño", 
    price: "$9.99", 
    description: "Ropa cómoda y adorable para niños.", 
    img: "https://i.pinimg.com/736x/a4/9c/15/a49c15c204acb979e5e324f6111c9292.jpg" 
  },
  { 
    id: 9, 
    name: "Vestido Niña", 
    price: "$59.99", 
    description: "Un vestido elegante para ocasiones especiales.", 
    img: "https://i.pinimg.com/736x/09/64/08/096408317a3f4787e07d215002357fa2.jpg" 
  },
  { 
    id: 10, 
    name: "Conjunto Niña", 
    price: "$69.99", 
    description: "Conjunto moderno y colorido para niñas.", 
    img: "https://i.pinimg.com/736x/21/66/4d/21664d3351ffb7b2a64a332adab3214e.jpg" 
  },
  { 
    id: 11, 
    name: "Terno de Hombre", 
    price: "$39.99", 
    description: "Traje formal y elegante para eventos importantes.", 
    img: "https://i.pinimg.com/1200x/29/5e/ef/295eeff4cda613d57734cee4d9baec4b.jpg" 
  },
  { 
    id: 12, 
    name: "Terno de Mujer", 
    price: "$49.99", 
    description: "Traje sofisticado para un look profesional.", 
    img: "https://i.pinimg.com/1200x/b9/bf/a6/b9bfa667862876df265dbfc578d7ccb9.jpg" 
  },
];

function ProductDetail() {
  const { id } = useParams(); // Obtiene el ID del producto desde la URL
  const product = products.find((item) => item.id === parseInt(id)); // Busca el producto correspondiente

  if (!product) {
    return <h2>Producto no encontrado</h2>; // Mensaje si no se encuentra el producto
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <img
          src={product.img}
          alt={product.name}
          className="product-detail-image"
        />
        <div className="product-detail-info">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">{product.price}</p>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
