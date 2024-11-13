import React from "react";
import "./JobsCards.css";
import { Link } from "react-router-dom";

const JobsCards = () => {
  /* 
 const [apiJobsData, setApiJobsData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.sheetbest.com/sheets/78484840-5d53-49b4-8262-574a1000787d"
      )
      .then((incomingData) => {
        setApiJobsData(incomingData.data);
      });
  }, []);
    */

  // Sample list of jobs
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

  return (
    <div className="jobs">
      <div className="container">
        <div className="jobs-content-holder">
          <p>Text</p>
          <div className="jobs-container">
            {jobs.map((job) => (
              <div key={job.id}>
                <Link to={`/Karriere/${job.id}`}>{job.Name}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsCards;
