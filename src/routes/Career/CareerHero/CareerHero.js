import React from "react";
import "./CareerHero.css";
import heroimg from "../../../images/rewe-gemüse-abteilung-upscaling.jpg";

const CareerHero = () => {
  return (
    <div class="hero">
      <img class="hero-img" src={heroimg} alt="Obstabteilung in Rewe" />
      <div className="hero-text-content">
        <div className="container">
          <div className="hero-text-content-center">
            <h1>Deine Karriere</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerHero;
