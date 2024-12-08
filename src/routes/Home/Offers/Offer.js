import React from "react";
import "./Offer.css";
import pdfUrl from "../../../assets/Endt_KW50_24_web.pdf";

const Offer = () => {
  return (
    <div className="home-offer-section">
      <h2>Aktuelle Angebote</h2>

      <embed
        className="prospekt-container"
        src={`${pdfUrl}#zoom=33`}
        type="application/pdf"
      />
    </div>
  );
};

export default Offer;
