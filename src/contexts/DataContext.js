import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [apiJobsData, setApiJobsData] = useState([]);
  const [apiEmployeeData, setApiEmployeeData] = useState([]);
  const [apiImgData, setApiImgData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Hole alle Daten von der Serverless Function
        const response = await fetch("/api/contentful"); // Dein Serverless Function-Endpunkt
        const data = await response.json();

        // Setze die abgerufenen Daten in den State
        setApiJobsData(data.jobs); // Jobs-Daten
        setApiEmployeeData(data.employees); // Mitarbeiter-Daten
        setApiImgData(data.images); // Bilder-Daten
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{ apiJobsData, apiEmployeeData, apiImgData, loading }}
    >
      {children}
    </DataContext.Provider>
  );
};
