import React from 'react'
import "./AboutManager.css"
import managerimg from "../../../images/manager.png"

const AboutManager = () => {
  return (
    <div class = "manager">
      <div class ="container"> 
        <img class ="manager-img"
          src={managerimg}
          alt = "Bild vom Filialleiter"/>
      </div>
    </div>
    
  );
};

export default AboutManager
