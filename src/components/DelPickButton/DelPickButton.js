import React from "react";
import "./DelPickButton.css";
import { Player } from "@lottiefiles/react-lottie-player";
import shoppingAnimation from "../../animations/shopping-ani.json";

const DelPickButton = () => {
  return (
    <div className="del-pick-button">
      <a
        href="https://www.rewe.de/marktseite/moenchengladbach/1478585/rewe-markt-lindenstr-274-276/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Player id="shopping-animation" autoplay loop src={shoppingAnimation} />
        <p className="del-pick-button-text">Abhol- und Lieferservice</p>
      </a>
    </div>
  );
};

export default DelPickButton;
