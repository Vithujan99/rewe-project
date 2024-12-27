import React from "react";
import "./AboutHero.css";
import heroimg from "../../../images/rewe_von_außen.webp";

const AboutHero = () => {
  return (
    <div class="hero">
      <img class="hero-img" src={heroimg} alt="Rewe Filiale von Außen" />
      <div className="hero-text-content">
        <div className="container">
          <div className="hero-text-content-center">
            <h1>Über Uns</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutHero;
