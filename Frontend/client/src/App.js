// import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Products from "./components/Products";
import Footer from "./components/Footer";
import "./App.css";
import './assets/styles/global.css';

import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Cart from "./components/Cart";

function App() {
  const footerRef = useRef(null);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header scrollToFooter={footerRef} />
              <Hero />
              <Features />
              <Products />
              <Footer ref={footerRef} />
            </>
          }
        />
        <Route path="/cart" element={<><Header scrollToFooter={footerRef} /><Cart /></>} />
      </Routes>
    </Router>
  );
}




export default App;
