import React from "react";
import "./JobDetail.css";
import { useParams } from "react-router-dom";

const JobDetail = () => {
  const { id } = useParams(); // Extract job ID from the URL
  const jobs = [
    {
      id: 1,
      Name: "Frontend Developer",
      Beschreibung: `
      <h2>Was du bei uns bewegst:</h2>
      <p>
        Du liebst es, wenn sich deine Gäste richtig wohlfühlen und du ihnen stets deine volle Aufmerksamkeit schenken kannst? 
        Du möchtest sicherstellen, dass unsere Kund:innen in unserem REWE Markt das bestmögliche Einkaufserlebnis haben? 
        Dann bist du als Kundenberater:in für unsere REWE App genau richtig.
      </p>
      <ul>
        <li>Du bist die Ansprechperson im Markt für alle Themen rund um unsere REWE App.</li>
        <li>Du begeisterst unsere Kund:innen für unsere REWE App und setzt dabei eigene Ideen und Maßnahmen um.</li>
        <li>Du führst Kund:innengespräche und hilfst bei technischen Schwierigkeiten.</li>
      </ul>

      <h2>Was uns überzeugt:</h2>
      <ul>
        <li>Deine ausgeprägte Kund:innenorientierung und Kommunikationsstärke, dein Teamgeist und dein Verantwortungsbewusstsein</li>
        <li>Deine Begeisterung für den Handel sowie deine Freude am Umgang mit Menschen</li>
        <li>Deine Bereitschaft, Neues zu lernen</li>
      </ul>

      <h2>Was wir bieten:</h2>
      <p>
        Als sicherer Arbeitgeber stehen wir unseren Mitarbeitenden mit vielen Perspektiven und flexiblen Angeboten für alle Lebensphasen zur Seite. 
        Bei uns kannst du schnell Verantwortung übernehmen und den Lebensmitteleinzelhandel mitgestalten – sogar bis in die Selbständigkeit mit deinem eigenen REWE Markt.
        Entdecke deine Vorteile:
      </p>
      <ul>
        <li>Eine strukturierte Einarbeitung und ein eingespieltes Team, in dem persönliches Engagement und gegenseitige Hilfsbereitschaft an erster Stelle stehen</li>
        <li>Eine abwechslungsreiche und verantwortungsvolle Aufgabe im direkten Kund:innenkontakt</li>
        <li>Eine attraktive Vergütung</li>
        <li>Individuelle Entwicklungsmöglichkeiten durch unsere REWE Akademie</li>
        <li>Mitarbeitendenrabatt - 5 % Einkaufsrabatt bei REWE und PENNY sowie weitere Rabatte beim toom Baumarkt und bei DER Touristik</li>
        <li>Geringere Fahrtkosten - mit dem vergünstigten Deutschlandticket für nur 34,30 € pro Monat</li>
        <li>Vereinbarkeit von Beruf, Familie und Privatleben durch eine familienbewusste Personalpolitik (audit berufundfamilie)</li>
      </ul>

      <p>Weitere Informationen erhältst du unter <a href="https://rewe.de/karriere" target="_blank" rel="noopener noreferrer">rewe.de/karriere</a>.</p>

      <p>Wir freuen uns auf deine Online-Bewerbung. Bewerbungsunterlagen in Papierform können wir leider nicht zurücksenden.</p>
      <p>        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.sadsad",
</p>
      `,
      Gehalt: 50,
    },
    {
      id: 2,
      Name: "Backend Developer",
      Beschreibung:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.sadsad",
      Gehalt: 60,
    },
    {
      id: 3,
      Name: "Full Stack Developer",
      Beschreibung:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.sadsad",
      Gehalt: 70,
    },
  ];
  const job = jobs[id - 1]; // Retrieve the job details by ID

  if (!job) {
    console.log("Hallo");
    return <h2>Job not found</h2>;
  }
  return (
    <div className="jobDetail">
      <div className="container">
        <div className="jobDetail-content-button-holder">
          <div className="jobDetail-content-holder">
            <h1>{job.Name}</h1>
            <div dangerouslySetInnerHTML={{ __html: job.Beschreibung }} />
          </div>
          <div className="job-supply-button">Berwerben</div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
