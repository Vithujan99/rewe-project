import React from "react";
import "./Service.css";
import { CiDeliveryTruck, CiShop } from "react-icons/ci";

const Service = () => {
  return (
    <div className="service">
      <h2>Rewe Liefer- und Abholservice</h2>
      <p>
        Nutze unseren praktischen Liefer- oder Abholservice und spare Zeit beim
        Einkaufen!
      </p>
      <div className="service-card-holder">
        <div className="service-card">
          <CiDeliveryTruck className="sc-icon" />
          <p>Liefer-Service direkt zu dir nach Hause</p>
        </div>
        <div className="service-card">
          <CiShop className="sc-icon" />
          <p>Abhol-Service: Bestelle online und hole deine Einkäufe ab</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
