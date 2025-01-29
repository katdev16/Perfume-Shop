import React from "react";
import logo from "../img/Blue Modern Technology & Gaming Logo.png";
import cartIcon from "../img/shopping-cart.png";
import { Link } from "react-router-dom"; 

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
            <Link to="/cart">
              <img src={cartIcon} className="shopping-cart" alt="Cart" />
            </Link>
          </li>
        </ul>
      </nav>
      <div id="mobile">
        <Link to="/cart">
          <img src={cartIcon} className="shopping-cart" alt="Cart" />
        </Link>
        <i id="bar" className="fas fa-outdent"></i>
      </div>
    </header>
  );
}

export default Header;
