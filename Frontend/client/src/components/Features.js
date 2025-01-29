import React from "react";
import featureImg from "../img/StockCake-Stylized Sailing Ship_1719165663.jpg";

function Features() {
  const features = [
    "Online",
    "Save",
    "Happy Sell",
    "Support",
  ];

  return (
    <section id="feature" className="section-p1">
      {features.map((feature, index) => (
        <div key={index} className="fe-box">
          <img src={featureImg} alt={feature} />
          <h6>{feature}</h6>
        </div>
      ))}
    </section>
  );
}

export default Features;
