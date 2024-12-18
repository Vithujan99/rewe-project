import React, { useState, useEffect } from "react";
import "./Offer.css";
import pdfUrl from "../../../assets/Endt_KW50_24_web.pdf";

const Offer = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check the window size when the component mounts or the window is resized
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800); // Set isMobile to true if screen width is less than 800px
    };

    handleResize(); // Check the size on initial load
    window.addEventListener("resize", handleResize); // Listen for window resize events

    return () => window.removeEventListener("resize", handleResize); // Cleanup on component unmount
  }, []);

  return (
    <div className="home-offer-section">
      <h2>Aktuelle Angebote & Exklusive Rabatte</h2>
      <p>
        Jetzt, da du die <b>Rewe Bonus App</b> heruntergeladen hast, profitierst
        du nicht nur von exklusiven Vorteilen, sondern auch von unseren
        aktuellen, großartigen Angeboten! Nutze die Chance, noch mehr zu sparen
        und spannende Aktionen zu entdecken – direkt in deiner App.
      </p>
      <div className="open-container">
        <a
          href={pdfUrl}
          target="_blank" // Open PDF in a new tab
          rel="noopener noreferrer" // For security reasons
          className="prospekt-open-button"
        >
          Prospekt im neuen Fenster öffnen
        </a>
      </div>
      {!isMobile && console.log()}
      {/* Embed PDF - Only show if screen width is >= 800px */}
      {/* 
      {!isMobile && (
        <embed
          className="prospekt-container"
          src={`${pdfUrl}#zoom=44`}
          type="application/pdf"
          width="100%"
          height="600px"
          alt="PDF Preview"
        />
      )}
*/}
      {/* Download Button - Only show if screen width is < 800px
      {isMobile && (
        <div className="open-container">
          <a
            href={pdfUrl}
            target="_blank" // Open PDF in a new tab
            rel="noopener noreferrer" // For security reasons
            className="prospekt-open-button"
          >
            Prospekt im neuen Fenster öffnen
          </a>
        </div>
      )}
       */}
    </div>
  );
};

export default Offer;
