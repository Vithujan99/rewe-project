import React from "react";
import "./ReweApp.css";
import ReweBonusLogo from "../../../images/bonus-app-logo.png";
import AppHandy from "../../../images/rewe-scang-go.png";

const ReweApp = () => {
  return (
    <div className="rewe-app-section">
      <div className="ras-content-holder">
        <div className="ras-ch-left">
          <img src={ReweBonusLogo} alt="Logo von Rewe Bonus"></img>
          <h2>Lade die App herunter und sichere dir exklusive Vorteile!</h2>
        </div>
        <div className="ras-ch-right">
          <img src={AppHandy} alt="Logo von Rewe Bonus"></img>
        </div>
      </div>
    </div>
  );
};

export default ReweApp;
