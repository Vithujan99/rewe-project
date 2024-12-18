import React, { useContext } from "react";
import "./JobDetails.css";
import { useParams } from "react-router-dom";
import { motion } from "motion/react";
import { DataContext } from "../../../contexts/DataContext";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const JobDetails = () => {
  const { id } = useParams(); // Extrahiere die Job-ID aus der URL
  const { apiJobsData, loading } = useContext(DataContext);
  let currentJob = null;

  // Finde den aktuellen Job anhand der ID
  if (apiJobsData && id) {
    currentJob = apiJobsData.find((job) => job.sys.id === id); // `sys.id` in Contentful verwenden
  }

  // Ladeanzeige
  if (loading) {
    return <h2>Job wird geladen...</h2>;
  }

  // Wenn kein Job gefunden wurde
  if (!currentJob) {
    return <h2>Job nicht gefunden</h2>;
  }

  return (
    <div className="jobDetail">
      <div className="jobDetail-content-holder">
        <h1>{currentJob.fields.name}</h1> {/* Greife auf das "name"-Feld zu */}
        {/* Render das 'beschreibung'-Feld (falls du Rich Text verwendest) */}
        {console.log(currentJob.fields.beschreibung)}
        {documentToReactComponents(currentJob.fields.beschreibung)}
      </div>
      <motion.button
        onClick={() => {
          window.location.href = `mailto:example@example.com?subject=Bewerbung%20für%20die%20Stelle%20"${currentJob.fields.name}"&body=Lieber%20Bewerber,%0A%0A%20dies%20ist%20nur%20eine%20Beispiel-Mail.%20Bitte%20versende%20deinen%20Lebenslauf%20und%20verfasse%20die%20E-Mail%20neu.%0A%0ADie%20E-Mail%20sollte%20deinen%20Lebenslauf%20sowie%20optional%20dein%20Anschreiben%20und%20deine%20Zeugnisse%20enthalten.%20Das%20Anschreiben%20und%20die%20Zeugnisse%20sind%20freiwillig.%0A%0AGerne%20stehe%20ich%20für%20weitere%20Fragen%20zur%20Verfügung.%0A%0AGrüße,%0A%0A[Dein%20Name]%0A%0A%0A%5BAnhänge%20bitte%20hinzufügen:%20Lebenslauf,%20Anschreiben,%20Zeugnisse%5D`;
        }}
        className="job-supply-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        Bewerben
      </motion.button>
    </div>
  );
};

export default JobDetails;
