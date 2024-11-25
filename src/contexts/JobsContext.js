import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const JobsContext = createContext();

export const JobsProvider = ({ children }) => {
  const [apiJobsData, setApiJobsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://api.sheetbest.com/sheets/9d84988a-cb59-4f5e-bfb9-7c628b8ea3a2"
      )
      .then((response) => {
        setApiJobsData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <JobsContext.Provider value={{ apiJobsData, loading }}>
      {children}
    </JobsContext.Provider>
  );
};
