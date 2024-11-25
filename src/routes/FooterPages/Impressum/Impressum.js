import React from "react";

import "./Impressum.css";

const Impressum = () => {
  return (
    <div className="impressum">
      <div className="container">
        <h1>Impressum</h1>

        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          <strong>Betreiber der Webseite:</strong>
          <br />
          REWE Familie Sieger
          <br />
          REWE Sascha Sieger oHG
          <br />
          Lindenstr. 274-276
          <br />
          41063 Mönchengladbach
          <br />
        </p>

        <p>
          <strong>Kontakt:</strong>
          <br />
          Telefon: 02161-6532660
          <br />
          E-Mail: <a href="mailto:[E-Mail-Adresse]">[E-Mail-Adresse]</a>
        </p>

        <p>
          <strong>Vertreten durch:</strong>
          <br />
          Sascha Sieger
        </p>

        <p>
          <strong>Umsatzsteuer-ID:</strong>
          <br />
          Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
          [Nummer]
        </p>

        <p>
          <strong>Handelsregister:</strong>
          <br />
          Eintragung im Handelsregister (falls vorhanden).
          <br />
          Registergericht: [Name des Registergerichts]
          <br />
          Registernummer: [Registernummer]
        </p>

        <p>
          <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong>
          <br />
          [Name, Adresse und ggf. Kontakt des Verantwortlichen]
        </p>

        <h2>Haftungsausschluss</h2>
        <p>
          <strong>Haftung für Inhalte:</strong> Die Inhalte unserer Seiten
          wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte können wir jedoch keine
          Gewähr übernehmen.
        </p>
        <p>
          <strong>Haftung für Links:</strong> Unsere Webseite enthält Links zu
          externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss
          haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
          übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
          jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
        </p>
      </div>
    </div>
  );
};

export default Impressum;
