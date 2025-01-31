import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css"; // Import custom CSS for styling

function ProductDetails() {
  const { id } = useParams(); // Get the product id from the URL
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // Quantity state

  useEffect(() => {
    // Fetch product details based on the id
    axios
      .get(`http://localhost:8080/products/${id}`) // Adjust URL if needed
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const addToCart = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/cart/1/add/${id}`, { quantity }); // Send quantity
      console.log("Product added to cart:", response.data);
      alert("Product added to cart!");
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add to cart!");
    }
  };

  const buyNow = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/cart/1/buy/${id}`, { quantity }); // Buy Now functionality
      console.log("Purchase successful:", response.data);
      alert("Purchase successful!");
    } catch (error) {
      console.error("Error completing purchase:", error);
      alert("Failed to complete purchase!");
    }
  };

  if (!product) return <div>Loading...</div>; // Loading state

  return (
    <div className="product-details-container">
      <div className="product-details">
        <div className="product-image">
          <img
            src={product.imageUrl || "../img/StockCake-Sunset Perfume Silhouette_1719167831.jpg"} // Default image if no image URL
            alt={product.name}
          />
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <h3>R{product.price}</h3>

          <div className="quantity-container">
            <label>Quantity:</label>
            <input
              type="number"
              value={quantity}
              min="1"
              max="99"
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>

          <div className="buttons-container">
            <button className="add-to-cart-btn" onClick={addToCart}>Add to Cart</button>
            <button className="buy-now-btn" onClick={buyNow}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
