import React from "react";
import logo from "../img/Blue Modern Technology & Gaming Logo.png";
import cartIcon from "../img/shopping-cart.png";

function Header() {
  return (
    <header id="header">
      <a href="#">
        <img src={logo} className="logo" alt="Logo" />
      </a>
      <nav>
        <ul id="navbar">
          <li>
            <a className="active" href="index.html">Home</a>
          </li>
          <li>
            <a href="shop.html">Shop</a>
          </li>
          <li>
            <a href="blog.html">Blog</a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
          <li id="lg-bag">
            <a href="cart.html">
              <img src={cartIcon} className="shopping-cart" alt="Cart" />
            </a>
          </li>
        </ul>
      </nav>
      <div id="mobile">
        <a href="cart.html">
          <img src={cartIcon} className="shopping-cart" alt="Cart" />
        </a>
        <i id="bar" className="fas fa-outdent"></i>
      </div>
    </header>
  );
}

export default Header;
