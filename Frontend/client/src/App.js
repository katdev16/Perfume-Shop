import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Products from "./components/Products";
import Footer from "./components/Footer";
import "./App.css";
import './assets/styles/global.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
