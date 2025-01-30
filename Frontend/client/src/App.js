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

import Cart from "./components/Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <Header />
              <Hero />
              <Features />
              <Products />
              <Footer />
            </>
          }
        />
        <Route path="/cart" element={<><Header /><Cart /></>} />
      </Routes>
    </Router>
  );
}




export default App;
