import React, { useState, useEffect } from "react";
import Products from "./Products";

const Cart = () => {
  const initialCartItems = [
    // {
    //   id: 1,
    //   name: "Ocean Scent Perfume",
    //   price: 200,
    //   quantity: 1,
    //   image: "img/StockCake-Sunset Perfume Silhouette_1719167831.jpg",
    // },
    // {
    //   id: 2,
    //   name: "Crystal Perfume",
    //   price: 300,
    //   quantity: 1,
    //   image: "img/StockCake-Sunset Perfume Silhouette_1719167831.jpg",
    // },
  ];

  const [cartItems, setCartItems] = useState([]);
  const userId = localStorage.getItem("userId");
  console.log(`userid ${userId}`)

  useEffect(() => {
    fetch(`http://localhost:8080/cart/${userId}`) // Adjust URL if needed
      .then((response) => response.json())
      .then((data) => {
        console.log("--------")
        console.log(data.products)
        console.log("--------")
        setCartItems(data.products)
  })

      .catch((error) => console.error("Error fetching products:", error));
  }, []);


  // State to manage cart items
  // const [cartItems, setCartItems] = useState(initialCartItems);

  // Handle quantity change
  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Handle remove item from cart
  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate total price
  const calculateTotal = () => {
    // console.log("--------")
    // console.log(data)
    // console.log("--------")
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <section id="cart" className="section-p1">
      <h2>Your Shopping Cart</h2>
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>R{item.price}</p>
                <div className="quantity">
                  <button
                    className="decrease"
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  />
                  <button
                    className="increase"
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button className="remove-btn" onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
        <div className="cart-total">
          <h3>Total: R{calculateTotal()}</h3>
          <button id="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
