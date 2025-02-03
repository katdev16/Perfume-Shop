import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link to handle routing
import productImg from "../img/StockCake-Sunset Perfume Silhouette_1719167831.jpg";
import axios from "axios";
import { AddProduct} from "../services/api"; 

function Products() {
  // const API_URL = "http://localhost:8080";
  const API_URL = "https://perfume-shop-4.onrender.com"
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/products`) // Adjust URL if needed
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  const userId = localStorage.getItem("userId");
  console.log(`userid ${userId}`)

  const addToCart = async (product) => {
    console.log("------");
    console.log(product.id);
    console.log("------");
    try {
      const response = await axios.post(`${API_URL}/cart/${userId}/add/${String(product.id)}`, product);
      return response.data;
    } catch (error) {
      console.error("Failed to add to cart:", error.response?.data?.message || error.message);
      throw new Error(error.response?.data?.message || "Failed to add to cart");
    }
  };

  useEffect(() => {
    const defaultProducts = [
      { name: "Gucci", price: "999.99", category: "perfume" },
      { name: "Scent", price: "99.99", category: "perfume" },
      { name: "Crystal", price: "199.99", category: "perfume" }
    ];

    defaultProducts.forEach(async (product) => {
      try {
        await AddProduct(product);
      } catch (error) {
        console.error(`Failed to add ${product.name}:`, error.message);
      }
    });
  }, []);


  return (
    <section id="product1" className="section-p1">
      <h2>Featured Products</h2>
      <p>Collection of perfumes</p>
      <div className="pro-container">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="pro"> {/* Link to product details page */}
            {/* <div className="pro"> */}
              <img
                src={productImg} // Ensure image names match
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
                <button id="cart-btn" onClick={(e) => { e.preventDefault(); addToCart(product); }}>Add to cart</button>
              </div>
            {/* </div> */}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Products;
