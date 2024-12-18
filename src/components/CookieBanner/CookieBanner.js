import React, { useState, useEffect } from "react";
import "./CookieBanner.css"; // Stelle sicher, dass du auch die zugehörige CSS-Datei hast

const CookieBanner = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(null);

  // Überprüfe beim Laden, ob der Nutzer bereits eine Entscheidung getroffen hat
  useEffect(() => {
    const savedConsent = sessionStorage.getItem("cookiesAccepted");
    if (savedConsent === "true") {
      setCookiesAccepted(true); // Nutzer hat zugestimmt
    } else if (savedConsent === "false") {
      setCookiesAccepted(false); // Nutzer hat abgelehnt
    }
  }, []);

  const handleAccept = () => {
    setCookiesAccepted(true); // Nutzer hat zugestimmt
    sessionStorage.setItem("cookiesAccepted", "true"); // Speichern der Zustimmung im sessionStorage
  };

  const handleDecline = () => {
    setCookiesAccepted(false); // Nutzer hat abgelehnt
    sessionStorage.setItem("cookiesAccepted", "false"); // Speichern der Ablehnung im sessionStorage
  };

  if (cookiesAccepted !== null) return null; // Wenn der Nutzer bereits entschieden hat, Banner nicht mehr anzeigen

  return (
    <div className="cookie-banner">
      <div className="container">
        <p>
          Diese Webseite verwendet Google Fonts und Contentful. Möchten Sie der
          Nutzung zustimmen?
        </p>
        <div className="cookie-actions">
          <button onClick={handleAccept}>Zustimmen</button>
          <button onClick={handleDecline}>Ablehnen</button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
