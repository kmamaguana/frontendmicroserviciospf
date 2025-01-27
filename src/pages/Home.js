import React, { useState } from "react";
import "./Home.css";

// Datos completos de los productos
const products = [
  { 
    id: 1, 
    name: "Buso", 
    price: "$19.99", 
    description: "Un buso cómodo y moderno para cualquier ocasión.", 
    stock: 10,
    size: "M",
    color: "Rojo",
    gender: "Unisex",
    material: "Algodón",
    brand: "FashionHub",
    img: "https://i.pinimg.com/1200x/fd/c5/9b/fdc59b921dea94ef3584d9331f9c2758.jpg" 
  },
  { 
    id: 2, 
    name: "Corset", 
    price: "$29.99", 
    description: "Un corset elegante y estilizado para un look especial.", 
    stock: 5,
    size: "S",
    color: "Negro",
    gender: "Mujer",
    material: "Seda",
    brand: "Chic Couture",
    img: "https://i.pinimg.com/1200x/bd/4b/51/bd4b51f88e346b90eb3eb75794ab6ff4.jpg" 
  },
  { 
    id: 3, 
    name: "Conjunto", 
    price: "$24.99", 
    description: "Conjunto casual perfecto para el día a día.", 
    stock: 15,
    size: "L",
    color: "Azul",
    gender: "Unisex",
    material: "Algodón",
    brand: "BasicStyle",
    img: "https://i.pinimg.com/1200x/1d/26/5f/1d265f711c43784d5d3e339179c17370.jpg" 
  },
  { 
    id: 4, 
    name: "Conjunto Verano", 
    price: "$14.99", 
    description: "Ligero y fresco para los días más cálidos.", 
    stock: 20,
    size: "M",
    color: "Amarillo",
    gender: "Unisex",
    material: "Lino",
    brand: "Summer Vibes",
    img: "https://i.pinimg.com/1200x/68/ce/d1/68ced116b4d22e2c2134f52ebce497a8.jpg" 
  },
  { 
    id: 5, 
    name: "Camisa", 
    price: "$39.99", 
    description: "Camisa clásica, ideal para un look profesional.", 
    stock: 8,
    size: "XL",
    color: "Blanco",
    gender: "Hombre",
    material: "Poliéster",
    brand: "Business Wear",
    img: "https://img.fantaskycdn.com/0043eb62938f3733ff533a785fdb9c1c_2056x.jpeg" 
  },
  { 
    id: 6, 
    name: "Conjunto Hombre", 
    price: "$49.99", 
    description: "Un conjunto casual y cómodo para hombres.", 
    stock: 12,
    size: "M",
    color: "Gris",
    gender: "Hombre",
    material: "Algodón",
    brand: "Fashion Hub",
    img: "https://i.pinimg.com/1200x/9d/b1/14/9db114c846bcae1f864ad591d9515bd6.jpg" 
  },
  { 
    id: 7, 
    name: "Pantalón Hombre", 
    price: "$19.99", 
    description: "Pantalón moderno y versátil para hombres.", 
    stock: 25,
    size: "L",
    color: "Negro",
    gender: "Hombre",
    material: "Denim",
    brand: "CasualStyle",
    img: "https://i.pinimg.com/736x/ed/3d/d8/ed3dd8e383f40bf44689e8863aea5048.jpg" 
  },
  { 
    id: 8, 
    name: "Conjunto Niño", 
    price: "$9.99", 
    description: "Ropa cómoda y adorable para niños.", 
    stock: 30,
    size: "2T",
    color: "Verde",
    gender: "Niño",
    material: "Algodón",
    brand: "Kiddos",
    img: "https://i.pinimg.com/736x/a4/9c/15/a49c15c204acb979e5e324f6111c9292.jpg" 
  },
  { 
    id: 9, 
    name: "Vestido Niña", 
    price: "$59.99", 
    description: "Un vestido elegante para ocasiones especiales.", 
    stock: 6,
    size: "S",
    color: "Rosa",
    gender: "Niña",
    material: "Seda",
    brand: "Elegant Kids",
    img: "https://i.pinimg.com/736x/09/64/08/096408317a3f4787e07d215002357fa2.jpg" 
  },
  { 
    id: 10, 
    name: "Conjunto Niña", 
    price: "$69.99", 
    description: "Conjunto moderno y colorido para niñas.", 
    stock: 18,
    size: "M",
    color: "Multicolor",
    gender: "Niña",
    material: "Lino",
    brand: "Color Kids",
    img: "https://i.pinimg.com/736x/21/66/4d/21664d3351ffb7b2a64a332adab3214e.jpg" 
  }
];

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filtra los productos según la categoría seleccionada
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) =>
          Array.isArray(selectedCategory)
            ? selectedCategory.includes(product.gender)
            : product.gender === selectedCategory
        );

        return (
          <div className="home-container">
            {/* Hero Section */}
      
            {/* Categories Section */}
            <div className="categories">
              <h2>Shop by Category</h2>
              <div className="category-grid">
                <div
                  className="category-card"
                  onClick={() => setSelectedCategory("Hombre")}
                >
                  <img
                    src="https://i.pinimg.com/736x/a6/6d/c7/a66dc704795479f48641dfcff633c378.jpg"
                    alt="Men"
                  />
                  <p>Men</p>
                </div>
                <div
                  className="category-card"
                  onClick={() => setSelectedCategory("Mujer")}
                >
                  <img
                    src="https://i.pinimg.com/736x/3a/63/e6/3a63e6e6de9a3b18239fbccc6ecd684a.jpg"
                    alt="Women"
                  />
                  <p>Women</p>
                </div>
                <div
                  className="category-card"
                  onClick={() => setSelectedCategory(["Niño", "Niña"])}
                >
                  <img
                    src="https://i.pinimg.com/736x/2a/66/c1/2a66c1381c225d12ac4dc2a96a91f0ff.jpg"
                    alt="Kids"
                  />
                  <p>Kids</p>
                </div>
                <div
                  className="category-card"
                  onClick={() => setSelectedCategory("Unisex")}
                >
                  <img
                    src="https://i.pinimg.com/736x/dd/dd/17/dddd1791f4eb27460fb56ebb8844f916.jpg"
                    alt="Unisex"
                  />
                  <p>Unisex</p>
                </div>
                <div
                  className="category-card"
                  onClick={() => setSelectedCategory("all")}
                >
                  <img
                    src="https://i.pinimg.com/736x/84/fa/19/84fa19c92c43a84380e64816ded165ea.jpg"
                    alt="All"
                  />
                  <p>All</p>
                </div>
              </div>
            </div>
      
            {/* Product List Section */}
            <div className="product-list">
              <h3>
                {selectedCategory === "all"
                  ? "All Products"
                  : `${Array.isArray(selectedCategory) ? "Kids" : selectedCategory} Products`}
              </h3>
            <div className="product-grid">
              {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.img} alt={product.name} />
                <h4>{product.name}</h4>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;      