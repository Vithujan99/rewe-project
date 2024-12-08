import React from "react";
import "./Career.css";
import CareerHero from "./CareerHero/CareerHero";
import JobsCards from "./JobsCards/JobsCards";

const Career = () => {
  return (
    <div className="career">
      <CareerHero></CareerHero>
      <JobsCards></JobsCards>
    </div>
  );
};

export default Career;
