import React from "react";
import { useState, useEffect } from "react";
import "./WorkerCards.css";
import axios from "axios";

function WorkerCards() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.sheetbest.com/sheets/78484840-5d53-49b4-8262-574a1000787d"
      )
      .then((incomingData) => {
        setApiData(incomingData.data);
      });
  }, []);
  return (
    <div className="table-holder">
      <div className="worker-cards-holder">
        {apiData.map((data) => {
          return (
            <div id="worker-card" key={data}>
              <div id="card-content">
                <h3>{data.Name}</h3>
                <p>{data.Beschreibung}</p>
              </div>
              <div id="card-date">
                <p>{data.Datum}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WorkerCards;
