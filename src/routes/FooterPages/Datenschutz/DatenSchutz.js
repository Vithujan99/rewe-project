import React from "react";
import "./Datenschutz.css";

const Datenschutz = () => {
  return (
    <div className="datenschutz">
      <div className="container">
        <h1>Datenschutzerklärung</h1>

        <h2>1. Verantwortlicher</h2>
        <p>
          <strong>Verantwortlicher für die Datenverarbeitung:</strong>
          <br />
          [Name des Unternehmens / Filialinhabers]
          <br />
          [Adresse der Filiale]
          <br />
          [PLZ, Ort]
          <br />
          Telefon: [Telefonnummer]
          <br />
          E-Mail: <a href="mailto:[E-Mail-Adresse]">[E-Mail-Adresse]</a>
        </p>

        <h2>
          2. Erhebung und Speicherung personenbezogener Daten sowie Art und
          Zweck von deren Verwendung
        </h2>
        <p>
          Wir erheben und verarbeiten personenbezogene Daten, wenn Sie unsere
          Webseite besuchen oder mit uns über die angebotenen
          Kontaktmöglichkeiten in Verbindung treten. Zu den personenbezogenen
          Daten gehören insbesondere:
        </p>
        <ul>
          <li>
            Ihre Kontaktdaten, wie z.B. Name, E-Mail-Adresse, Telefonnummer,
          </li>
          <li>
            Informationen, die Sie uns über das Kontaktformular oder per E-Mail
            zur Verfügung stellen.
          </li>
        </ul>

        <h2>3. Rechtsgrundlage für die Verarbeitung</h2>
        <p>
          Die Verarbeitung Ihrer Daten erfolgt auf Grundlage der folgenden
          Rechtsgrundlagen der Datenschutz-Grundverordnung (DSGVO):
        </p>
        <ul>
          <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung),</li>
          <li>Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung),</li>
          <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).</li>
        </ul>

        <h2>4. Weitergabe von Daten</h2>
        <p>
          Ihre personenbezogenen Daten werden nicht an Dritte weitergegeben, es
          sei denn, dies ist zur Erfüllung des Vertrages erforderlich oder wir
          sind gesetzlich dazu verpflichtet.
        </p>

        <h2>5. Speicherung und Aufbewahrung von Daten</h2>
        <p>
          Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für
          die Erfüllung der Zwecke erforderlich ist, für die sie erhoben wurden,
          oder soweit gesetzliche Aufbewahrungspflichten bestehen.
        </p>

        <h2>6. Ihre Rechte</h2>
        <p>Sie haben das Recht:</p>
        <ul>
          <li>
            Auskunft über die gespeicherten personenbezogenen Daten zu erhalten
            (Art. 15 DSGVO),
          </li>
          <li>
            die Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO),
          </li>
          <li>die Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO),</li>
          <li>
            die Einschränkung der Verarbeitung Ihrer Daten zu verlangen (Art. 18
            DSGVO),
          </li>
          <li>
            der Verarbeitung Ihrer Daten zu widersprechen (Art. 21 DSGVO).
          </li>
        </ul>
        <p>
          Um diese Rechte auszuüben, können Sie uns jederzeit unter den oben
          angegebenen Kontaktinformationen erreichen.
        </p>

        <h2>7. Datenweitergabe in Drittstaaten</h2>
        <p>
          Eine Datenweitergabe in Drittstaaten (außerhalb der EU/des EWR) findet
          nur statt, wenn dies gesetzlich vorgeschrieben oder zur Erfüllung
          eines Vertrages erforderlich ist.
        </p>

        <h2>8. Sicherheit</h2>
        <p>
          Wir treffen geeignete technische und organisatorische Maßnahmen, um
          Ihre personenbezogenen Daten gegen Verlust, Diebstahl und unbefugten
          Zugriff zu schützen.
        </p>

        <h2>9. Änderung der Datenschutzerklärung</h2>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung gelegentlich zu
          ändern, um sie an geänderte rechtliche Vorgaben oder Änderungen
          unserer Dienstleistungen anzupassen.
        </p>

        <h2>10. Kontakt</h2>
        <p>
          Bei Fragen zur Verarbeitung Ihrer personenbezogenen Daten oder zur
          Ausübung Ihrer Rechte können Sie sich jederzeit an uns wenden:
        </p>
        <p>
          [Name des Unternehmens / Filialinhabers]
          <br />
          [Adresse der Filiale]
          <br />
          E-Mail: <a href="mailto:[E-Mail-Adresse]">[E-Mail-Adresse]</a>
        </p>
      </div>
    </div>
  );
};

export default Datenschutz;
