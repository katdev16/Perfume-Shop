import React, { useState, useRef } from "react";
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

function App() {
  const footerRef = useRef(null);
  const [showLogin, setShowLogin] = useState(false); // ✅ Manage Login Popup

  return (
    <Router>
      <div className="app-container">
        <Header scrollToFooter={footerRef} onLoginClick={() => setShowLogin(true)} />
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
        </Routes>

        {/* ✅ Show Login Modal */}
        {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
      </div>
    </Router>
  );
}

export default App;
