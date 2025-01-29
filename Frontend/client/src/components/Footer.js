import React from "react";
import logo from "../img/Blue Modern Technology & Gaming Logo.png";

function Footer() {
  return (
    <footer className="section-p1">
      <div className="col">
        <img src={logo} className="logo" alt="Logo" />
        <h4>Contact</h4>
        <p>
          <strong>Address:</strong> 106 Mbassia street, kilpsruit Soweto
        </p>
        <p>
          <strong>Phone:</strong> +27 122 456 78
        </p>
        <p>
          <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
        </p>
      </div>
      <div className="follow">
        <h4>Follow us</h4>
        <div className="icon">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
      <div className="col">
        <h4>About</h4>
        <a href="#">About us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact us</a>
      </div>
    </footer>
  );
}

export default Footer;
