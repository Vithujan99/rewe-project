import React from "react";
import "./ReweApp.css";
import ReweBonusLogo from "../../../images/bonus-app-logo.png";
import { Player } from "@lottiefiles/react-lottie-player";
import AppHandyAnimation from "../../../animations/App-Mobile-Download-Ani-Two.json";

const ReweApp = () => {
  return (
    <div className="rewe-app-section">
      <div className="ras-content-holder">
        <div className="ras-ch-left">
          <img src={ReweBonusLogo} alt="Logo von Rewe Bonus"></img>
          <div className="ras-ch-left-text">
            <h2>
              Lade die <b>Rewe Bonus App</b> herunter und genieße exklusive
              Vorteile!
            </h2>
            <p>
              Erhalte Rabatte, Bonuspunkte und spannende Aktionen direkt auf
              dein Smartphone.
            </p>
          </div>
        </div>
        <div className="ras-ch-right">
          <Player
            id="app-handy-animation"
            autoplay
            loop
            src={AppHandyAnimation}
          />
        </div>
      </div>
    </div>
  );
};

export default ReweApp;
