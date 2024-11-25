import React, { useContext, useEffect, useState } from "react";
import "./JobsCards.css";
import { Link } from "react-router-dom";
import { JobsContext } from "../../../contexts/JobsContext";

const JobsCards = () => {
  const { apiJobsData } = useContext(JobsContext);

  const [anyJobs, setAnyJobs] = useState(false);
  useEffect(() => {
    if (apiJobsData === null || apiJobsData.length === 0) {
      setAnyJobs(false);
    } else {
      setAnyJobs(true);
    }
  }, [apiJobsData]);
  // Sample list of jobs
  /*
  const jobs = [
    {
      id: 1,
      Name: "Frontend Developer",
      Beschreibung:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.sadsad",
      Gehalt: 50,
    },
    { id: 2, Name: "Backend Developer" },
    { id: 3, Name: "Full Stack Developer" },
  ];
  */
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
                    <div className="jobs-card" key={job.id}>
                      <h3>{job.Name}</h3>
                      <Link
                        className="job-card-button"
                        to={`/Karriere/${job.id}`}
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
