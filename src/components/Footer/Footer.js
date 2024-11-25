import React from "react";
import "./Footer.css";
import siegerLogo from "../../images/sieger_logo-transparent.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content-holder">
          <div className="footer-content-holder-left">
            <img
              className="footer-logo"
              src={siegerLogo}
              alt="Logo der Rewe Filiale"
            ></img>
          </div>
          <div className="footer-content-holder-right">
            <div className="footer-contact-holder">
              <p className="fonter-contact-hader">Kontakt Info</p>
              <p>Email</p>
              <p>02161-6532660</p>
            </div>
            <div className="footer-links-holder">
              <p>Links</p>
              <NavLink className="footer-link" to="/Impressum">
                Impressum
              </NavLink>
              <NavLink className="footer-link" to="/Datenschutz">
                Datenschutz
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
