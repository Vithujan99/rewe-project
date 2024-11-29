import React, { useContext, useEffect, useState } from "react";
import "./JobsCards.css";
import { Link } from "react-router-dom";
import { DataContext } from "../../../contexts/DataContext";

const JobsCards = () => {
  const { apiJobsData } = useContext(DataContext);

  const [anyJobs, setAnyJobs] = useState(false);
  useEffect(() => {
    if (apiJobsData === null || apiJobsData.length === 0) {
      setAnyJobs(false);
    } else {
      setAnyJobs(true);
    }
  }, [apiJobsData]);

  return (
    <div className="jobs">
      <div className="container">
        <div className="jobs-content-holder">
          <p>
            Willkommen bei Rewe! Wir sind stets auf der Suche nach talentierten
            und motivierten Menschen, die gemeinsam mit uns wachsen und die
            Zukunft gestalten möchten. Bei uns erwartet dich ein inspirierendes
            Arbeitsumfeld, spannende Projekte und die Chance, wirklich etwas zu
            bewirken. Werde Teil unseres Teams und bringe deine Karriere auf das
            nächste Level!
          </p>
          <div className="jobs-card-section">
            {anyJobs ? (
              <>
                <h2>Aktuell offene Jobs</h2>
                <div className="jobs-container">
                  {apiJobsData.map((job) => (
                    <div className="jobs-card" key={job._id}>
                      <h3>{job.name}</h3>
                      <Link
                        className="job-card-button"
                        to={`/Karriere/${job._id}`}
                      >
                        Mehr Erfahren
                      </Link>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <h2 id="job-card-section-n-titel">
                Derzeit keine offenen Stellen verfügbar
              </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsCards;
