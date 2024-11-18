import React from "react";
import "./JobPage.css";
import JobDetails from "./JobDetails/JobDetails";

const JobPage = () => {
  return (
    <div className="jobPage">
      <div className="container">
        <JobDetails></JobDetails>
      </div>
    </div>
  );
};

export default JobPage;
