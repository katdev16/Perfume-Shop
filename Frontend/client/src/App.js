import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import LoginForm from "./components/LoginForm"; 

import "./App.css";
import "./assets/styles/global.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import ProductDetails from "./components/ProductDetails"; 


function App() {  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(false);

  // Check login state on component mount
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setIsLoggedIn(true);
      setUserId(storedUserId);
    }
  }, []);

  // Toggle login form visibility
  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  // Close the login form
  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
  };

  // Handle successful login
  const handleLoginSuccess = (userId) => {
    setUserId(userId);
    setIsLoggedIn(true);
    localStorage.setItem("userId", userId); // Store userId in localStorage
    setShowLoginForm(false); // Close the login form on success
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserId(null);
    localStorage.removeItem("userId"); // Remove userId from localStorage
  };
  const footerRef = useRef(null);
  const [showLogin, setShowLogin] = useState(false); // ✅ Manage Login Popup

  return (
    <Router>
      <div className="app-container">
        {/* <Header scrollToFooter={footerRef} onLoginClick={() => setShowLogin(true)}  /> */}
        <Header
        // scrollToFooter={footerRef} onLoginClick={() => setShowLogin(true)
        onLoginClick={handleLoginClick}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />
       {showLoginForm && (
        <LoginForm onClose={handleCloseLoginForm} onLoginSuccess={handleLoginSuccess} />
      )}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <Products />
                <Footer ref={footerRef} />
              </>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} /> {/* Product details page */}
        </Routes>

        {/* ✅ Show Login Modal */}
        {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
      </div>
    </Router>
  );
}

export default App;
