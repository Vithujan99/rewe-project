import React from "react";
import "./HomeHero.css";
import heroimg from "../../../images/rewe_von_außen.jpg";
import siegerLogo from "../../../images/sieger_logo.jpg";

const HomeHero = () => {
  return (
    <div id="homehero">
      <img id="homehero-img" src={heroimg} alt="Rewe Filiale von Außen" />
      <div className="hero-text-content">
        <div className="container">
          <div className="hero-text-content-center">
            <h1>Herzlich Willkommen zu</h1>
            <img src={siegerLogo} alt="Logo der Rewe Filiale" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
