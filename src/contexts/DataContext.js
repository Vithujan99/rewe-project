import React, { createContext, useState, useEffect } from "react";
import client from "../client"; // Dein Contentful-Client

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [apiJobsData, setApiJobsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiEmployeeData, setApiEmployeeData] = useState([]);
  const [apiImgData, setApiImgData] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await client.getEntries({
          content_type: "job", // Dein Content Type für Jobs
          select: "fields.name,fields.beschreibung,sys.id", // Wähle nur die benötigten Felder
        });
        setApiJobsData(response.items); // Setze die Daten
      } catch (err) {
        console.error("Error fetching jobs data:", err);
      } finally {
        setLoading(false);
      }
    };

    const fetchEmployees = async () => {
      try {
        const response = await client.getEntries({
          content_type: "mitarbeiter", // Dein Content Type für Mitarbeiter
          select:
            "fields.name,fields.position,fields.biotext,fields.profilbild,sys.id", // Wähle die Felder aus
        });
        setApiEmployeeData(response.items);
      } catch (err) {
        console.error("Error fetching employees data:", err);
      }
    };

    const fetchImgs = async () => {
      try {
        const response = await client.getEntries({
          content_type: "webBild", // Dein Content Type für Bilder
          select: "fields.name,fields.bild", // Wähle die Felder aus
        });
        setApiImgData(response.items);
      } catch (err) {
        console.error("Error fetching image data:", err);
      }
    };

    fetchJobs();
    fetchEmployees();
    fetchImgs();
  }, []);

  return (
    <DataContext.Provider
      value={{ apiJobsData, loading, apiEmployeeData, apiImgData }}
    >
      {children}
    </DataContext.Provider>
  );
};
