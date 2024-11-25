import React, { useContext } from "react";
import "./JobDetails.css";
import { useParams } from "react-router-dom";
import { motion } from "motion/react";
import { JobsContext } from "../../../contexts/JobsContext";

const JobDetails = () => {
  const { id } = useParams(); // Extract job ID from the URL
  const { apiJobsData, loading } = useContext(JobsContext);
  /*
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
  */
  const job = apiJobsData[id - 1]; // Retrieve the job details by ID

  if (loading) {
    console.log("Hallo");
    return <h2>Job nicht gefunden</h2>;
  }
  return (
    <div className="jobDetail">
      <div className="jobDetail-content-holder">
        <h1>{job.Name}</h1>
        <div dangerouslySetInnerHTML={{ __html: job.Beschreibung }} />
      </div>
      <motion.button
        onClick={() => {
          window.location.href = `mailto:example@example.com?subject=Bewerbung%20für%20die%20Stelle%20"${job.Name}"&body=Lieber%20Bewerber,%0A%0A%20dies%20ist%20nur%20eine%20Beispiel-Mail.%20Bitte%20versende%20deinen%20Lebenslauf%20und%20verfasse%20die%20E-Mail%20neu.%0A%0ADie%20E-Mail%20sollte%20deinen%20Lebenslauf%20sowie%20optional%20dein%20Anschreiben%20und%20deine%20Zeugnisse%20enthalten.%20Das%20Anschreiben%20und%20die%20Zeugnisse%20sind%20freiwillig.%0A%0AGerne%20stehe%20ich%20für%20weitere%20Fragen%20zur%20Verfügung.%0A%0AGrüße,%0A%0A[Dein%20Name]%0A%0A%0A%5BAnhänge%20bitte%20hinzufügen:%20Lebenslauf,%20Anschreiben,%20Zeugnisse%5D`;
        }}
        className="job-supply-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        Berwerben
      </motion.button>
    </div>
  );
};

export default JobDetails;
