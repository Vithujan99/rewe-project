import React, { useEffect, useState } from "react";
import "./ContactInfo.css";
import klaroConfig from "../../../config/klaro-config";

const ContactInfo = () => {
  const [consentGiven, setConsentGiven] = useState(false);
  useEffect(() => {
    const Klaro = require("klaro");

    // Stelle sicher, dass Klaro korrekt initialisiert wird
    Klaro.setup({
      ...klaroConfig, // Deine Klaro-Konfiguration hier verwenden
    });

    // Überprüfe, ob die Zustimmung für Google Maps vorliegt
    const isConsentGiven = Klaro.getManager().getConsent("google-maps");
    setConsentGiven(isConsentGiven);
  }, []);
  return (
    <div className="contactInfo">
      <div className="container info-container">
        <div className="info-content-holder">
          <h2>Öffnungszeiten</h2>
          <div className="oT-content">
            <div className="oT-content-day">Montag bis Samstag</div>
            <div className="oT-content-time">7:00 bis 21:30</div>
          </div>
        </div>
        <div className="dividing-line"></div>
        <div className="info-content-holder">
          {consentGiven ? (
            <iframe
              className="google-maps"
              title="REWE Markt Mönchengladbach - Lindenstr. 274-276"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.783628620467!2d6.412208099999999!3d51.204638499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8abf97880e1ef%3A0x5de7c06e786749e7!2sREWE!5e0!3m2!1sde!2sde!4v1732104182385!5m2!1sde!2sde"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          ) : (
            <p>Bitte stimmen Sie der Nutzung von Google Maps zu.</p>
          )}

          <div className="info-content">
            <h2>Adresse</h2>
            <p>Lindenstraße. 274-276</p>
            <p>41063 Mönchengladbach</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
