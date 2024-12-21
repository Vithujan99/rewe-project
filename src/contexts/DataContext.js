import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [apiJobsData, setApiJobsData] = useState([]);
  const [apiEmployeeData, setApiEmployeeData] = useState([]);
  const [apiImgData, setApiImgData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        // Statt direkt Contentful anzusprechen, rufen wir jetzt unsere Serverless Function ab
        const response = await fetch("/api/contentful");
        const data = await response.json();
        // Setze die abgerufenen Daten in den jeweiligen States
        setApiJobsData(data.jobs);
        setApiEmployeeData(data.employees);
        setApiImgData(data.images);
      } catch (err) {
        console.error("Fehler beim Abrufen der Jobs-Daten:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <DataContext.Provider
      value={{ apiJobsData, apiEmployeeData, apiImgData, loading }}
    >
      {children}
    </DataContext.Provider>
  );
};
