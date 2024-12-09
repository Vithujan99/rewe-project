import React, { createContext, useState, useEffect } from "react";
import client from "../client";

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
        const data = await client.fetch(
          '*[_type == "job"]{_id,name,beschreibung}'
        );
        setApiJobsData(data);
      } catch (err) {
        console.error("Error fetching jobs data:", err);
      } finally {
        setLoading(false);
      }
    };
    const fetchEmployees = async () => {
      try {
        const data = await client.fetch(
          '*[_type == "employee"]{_id,profilbild{asset -> {url}},name,position,biotext}'
        );
        setApiEmployeeData(data);
      } catch (err) {
        console.error("Error fetching jobs data:", err);
      }
    };
    const fetchImgs = async () => {
      try {
        const data = await client.fetch(
          '*[_type == "img"]{name,bild{asset -> {url}}}'
        );
        setApiImgData(data);
      } catch (err) {
        console.error("Error fetching jobs data:", err);
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
