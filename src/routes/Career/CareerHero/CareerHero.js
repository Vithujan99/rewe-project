import React, { useContext } from "react";
import "./CareerHero.css";
import { DataContext } from "../../../contexts/DataContext";

const CareerHero = () => {
  const { apiImgData } = useContext(DataContext);
  const data = apiImgData.find((img) => img.name === "career-hero-img");

  // If data is not ready, return null to render nothing
  if (!data) {
    return null;
  }

  return (
    <div className="hero">
      <img className="hero-img" src={data.bild.asset.url} alt={data.name} />
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
