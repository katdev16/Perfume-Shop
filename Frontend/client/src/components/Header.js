import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/Blue Modern Technology & Gaming Logo.png";
import cartIcon from "../img/shopping-cart.png";

const Header = ({ scrollToFooter, onLoginClick }) => {
  return (
    <header id="header">
      <a href="#">
        <img src={logo} className="logo" alt="Logo" />
      </a>
      <nav>
        <ul id="navbar">
          <li>
            <Link to="/" className="active">Home</Link>
          </li>
          <li>
            <Link onClick={() => scrollToFooter.current.scrollIntoView({ behavior: "smooth" })}>
              About 
            </Link>
          </li>
          
          <li>
            <Link>Contact</Link>
          </li>
          <li>
            <Link to="/cart">
              <img src={cartIcon} className="shopping-cart" alt="Cart" />
            </Link>
          </li>
          {/* ✅ Login Button */}
          <li>
            <button className="login-btn" onClick={onLoginClick}>Login</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
