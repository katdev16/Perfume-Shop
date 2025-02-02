import React from "react";
import "./Hero.css"; // Custom styles for Hero if needed
import perfumeImage from "../img/Blue Modern Technology & Gaming Logo.png";

function Hero() {
  return (
    <section id="hero"  style={{ backgroundImage: `url(${perfumeImage})` }}>
      <h4>Trade-in-offer</h4>
      <h2>Super value deals</h2>
      <h1>On all products</h1>
      <p>Save more</p>
      <button>Shop Now</button>
    </section>
  );
}

export default Hero;
