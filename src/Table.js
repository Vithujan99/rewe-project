import React from "react";
import { useState, useEffect } from "react";
import "./Table.css";
import axios from "axios";

function Table() {
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
      <table>
        <thead>
          <tr>
            <th scope="row">KalenderWoche</th>
            <th scope="row">Montag</th>
            <th scope="row">Dienstag</th>
            <th scope="row">Mittwoch</th>
            <th scope="row">Donnerstag</th>
            <th scope="row">Freitag</th>
            <th scope="row">Samstag</th>
            <th scope="row">ÜberStunden</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((data) => {
            return (
              <tr>
                <th scope="col">{data.KalenderWoche}</th>
                <td>{data.Montag}</td>
                <td>{data.Dienstag}</td>
                <td>{data.Mittwoch}</td>
                <td>{data.Donnerstag}</td>
                <td>{data.Freitag}</td>
                <td>{data.Samstag}</td>
                <td>{data.ÜberStunden}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
