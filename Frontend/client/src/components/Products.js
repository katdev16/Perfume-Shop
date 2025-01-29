// import React from "react";
import productImg from "../img/StockCake-Sunset Perfume Silhouette_1719167831.jpg";
import React, { useState, useEffect } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/products") // Adjust URL if needed
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <section id="product1" className="section-p1">
      <h2>Featured Products</h2>
      <p>Collection of perfumes</p>
      <div className="pro-container">
        {products.map((product) => (
          <div key={product.id} className="pro">
            <img
              src={`/img/${product.image}`} // Ensure image names match
              alt={product.name}
            />
            <div className="des">
              <span>{product.description}</span>
              <h5>{product.name}</h5>
              <div className="star">
                {Array(5)
                  .fill()
                  .map((_, starIndex) => (
                    <i key={starIndex} className="fas fa-star"></i>
                  ))}
              </div>
              <h4>R{product.price}</h4>
              <a href="#">
                <button id="cart-btn">Add to cart</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
