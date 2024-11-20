import React from "react";
import "./ContactHero.css";
import heroimg from "../../../images/organic-tasty-vegetable-wicker-basket-sale-1920.jpg";

const ContactHero = () => {
  return (
    <div class="hero">
      <img
        class="hero-img"
        src={heroimg}
        alt="Obst und Gemüse in einem Handel"
      />
      <div className="hero-text-content">
        <div className="container">
          <div className="hero-text-content-center">
            <h1>Kontakt</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
