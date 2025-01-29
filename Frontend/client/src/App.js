// import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Products from "./components/Products";
import Footer from "./components/Footer";
import "./App.css";
import './assets/styles/global.css';

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Cart from "./components/Cart"; // Assuming you have a Cart component
 // Example for the Home component

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> Home page */}
        <Route path="/cart" element={<Cart />} /> {/* Cart page */}
        {/* Add other routes for Shop, Blog, etc. */}
      </Routes>
    </Router>
  );
}




export default App;
