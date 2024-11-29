import React, { useContext } from "react";
import "./JobDetails.css";
import { useParams } from "react-router-dom";
import { motion } from "motion/react";
import { DataContext } from "../../../contexts/DataContext";
import { PortableText } from "@portabletext/react";

const JobDetails = () => {
  const { id } = useParams(); // Extract job ID from the URL
  const { apiJobsData, loading } = useContext(DataContext);
  let currentJob = null;

  // Find the current job by ID
  currentJob = apiJobsData.find((job) => job._id === id);

  if (loading) {
    console.log("Hallo");
    return <h2>Job nicht gefunden</h2>;
  }
  return (
    <div className="jobDetail">
      <div className="jobDetail-content-holder">
        <h1>{currentJob.name}</h1>
        {/* Render the 'beschreibung' field */}
        <PortableText value={currentJob.beschreibung} />
      </div>
      <motion.button
        onClick={() => {
          window.location.href = `mailto:example@example.com?subject=Bewerbung%20für%20die%20Stelle%20"${currentJob.Name}"&body=Lieber%20Bewerber,%0A%0A%20dies%20ist%20nur%20eine%20Beispiel-Mail.%20Bitte%20versende%20deinen%20Lebenslauf%20und%20verfasse%20die%20E-Mail%20neu.%0A%0ADie%20E-Mail%20sollte%20deinen%20Lebenslauf%20sowie%20optional%20dein%20Anschreiben%20und%20deine%20Zeugnisse%20enthalten.%20Das%20Anschreiben%20und%20die%20Zeugnisse%20sind%20freiwillig.%0A%0AGerne%20stehe%20ich%20für%20weitere%20Fragen%20zur%20Verfügung.%0A%0AGrüße,%0A%0A[Dein%20Name]%0A%0A%0A%5BAnhänge%20bitte%20hinzufügen:%20Lebenslauf,%20Anschreiben,%20Zeugnisse%5D`;
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
