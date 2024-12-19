import React from "react";
import "./Datenschutz.css";

const Datenschutz = () => {
  return (
    <div className="datenschutz">
      <div className="container">
        <h1>Datenschutzerklärung</h1>

        <h2>1. Verantwortlicher</h2>
        <p>
          <strong>Verantwortlich für die Datenverarbeitung:</strong>
          <br />
          REWE Sascha Sieger oHG
          <br />
          Lindenstr. 274-276
          <br />
          41063 Mönchengladbach
          <br />
          Telefon: 02161-6532660
          <br />
          E-Mail: <a href="mailto:[E-Mail-Adresse]">[E-Mail-Adresse]</a>
        </p>

        <h2>2. Erhebung und Speicherung personenbezogener Daten</h2>
        <p>
          Wir erheben personenbezogene Daten, wenn Sie unsere Webseite besuchen
          oder uns über die angebotenen Kontaktmöglichkeiten kontaktieren. Zu
          den personenbezogenen Daten gehören insbesondere:
        </p>
        <ul>
          <li>
            Name, E-Mail-Adresse und Telefonnummer, sofern von Ihnen angegeben.
          </li>
          <li>
            Angaben, die Sie uns über das Kontaktformular oder per E-Mail
            übermitteln.
          </li>
        </ul>

        <h2>3. Rechtsgrundlage der Datenverarbeitung</h2>
        <p>
          Die Verarbeitung Ihrer Daten erfolgt auf Grundlage der folgenden
          Artikel der Datenschutz-Grundverordnung (DSGVO):
        </p>
        <ul>
          <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
          <li>Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)</li>
          <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</li>
        </ul>

        <h2>4. Weitergabe von Daten</h2>
        <p>
          Eine Weitergabe Ihrer Daten an Dritte erfolgt nur, wenn dies zur
          Vertragserfüllung notwendig ist oder wir gesetzlich dazu verpflichtet
          sind.
        </p>

        <h2>5. Speicherdauer</h2>
        <p>
          Ihre personenbezogenen Daten werden nur so lange gespeichert, wie es
          für die Erfüllung der Zwecke erforderlich ist oder gesetzliche
          Aufbewahrungsfristen dies verlangen.
        </p>

        <h2>6. Ihre Rechte</h2>
        <p>Sie haben das Recht auf:</p>
        <ul>
          <li>
            Auskunft über die gespeicherten personenbezogenen Daten (Art. 15
            DSGVO)
          </li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        </ul>
        <p>
          Zur Ausübung Ihrer Rechte können Sie uns jederzeit über die oben
          angegebenen Kontaktdaten erreichen.
        </p>

        <h2>7. Datenübermittlung in Drittstaaten</h2>
        <p>
          Eine Übermittlung Ihrer Daten in Drittstaaten erfolgt nur, wenn dies
          zur Vertragserfüllung notwendig ist oder gesetzlich vorgeschrieben
          wird.
        </p>

        <h2>8. Sicherheit</h2>
        <p>
          Wir setzen technische und organisatorische Maßnahmen ein, um Ihre
          Daten vor Verlust, Diebstahl und unbefugtem Zugriff zu schützen.
        </p>

        <h2>9. Hosting durch GitHub Pages</h2>
        <p>
          Diese Webseite wird über <strong>GitHub Pages</strong> gehostet, einen
          Dienst von <strong>GitHub, Inc.</strong> (88 Colin P. Kelly Jr.
          Street, San Francisco, CA 94107, USA). GitHub verarbeitet technische
          Daten wie IP-Adressen und Server-Logs, um den Dienst bereitzustellen
          und zu optimieren.
        </p>
        <p>
          Weitere Informationen finden Sie in der Datenschutzerklärung von
          GitHub unter
          <a
            href="https://docs.github.com/en/github/site-policy/github-privacy-statement"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://docs.github.com/en/github/site-policy/github-privacy-statement
          </a>
          .
        </p>

        <h2>10. Verwendung von Contentful</h2>
        <p>
          Wir nutzen <strong>Contentful</strong>, ein Content-Management-System
          (CMS), zur Bereitstellung von Inhalten auf unserer Webseite.
          Contentful verarbeitet Daten ausschließlich in unserem Auftrag, um die
          Inhalte anzuzeigen. Dabei werden keine personenbezogenen Daten für
          Marketingzwecke verwendet.
        </p>

        <h2>11. Änderungen dieser Datenschutzerklärung</h2>
        <p>
          Wir behalten uns das Recht vor, diese Datenschutzerklärung zu
          aktualisieren, um sie an geänderte rechtliche Vorgaben oder neue
          Funktionen unserer Webseite anzupassen.
        </p>

        <h2>12. Kontakt</h2>
        <p>
          Bei Fragen oder zur Ausübung Ihrer Rechte wenden Sie sich bitte an:
        </p>
        <p>
          REWE Sascha Sieger oHG
          <br />
          Lindenstr. 274-276, 41063 Mönchengladbach
          <br />
          E-Mail: <a href="mailto:[E-Mail-Adresse]">[E-Mail-Adresse]</a>
        </p>
      </div>
    </div>
  );
};

export default Datenschutz;
