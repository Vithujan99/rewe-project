import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const changeScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", changeScroll);

  const { pathname } = useLocation();

  return (
    <nav className={scroll ? "moving-navbar" : "navbar"}>
      <div className="navbar-container">
        <div className="logo-holder">REWE</div>
        {/* <img
          className="logo-holder"
          src={siegerLogo}
          alt="Logo der Rewe Filiale"
        />*/}

        <div className="link-holder">
          <NavLink className={pathname === "/" ? "active-link" : "link"} to="/">
            Home
          </NavLink>
          <NavLink
            className={pathname === "/FamilieSieger" ? "active-link" : "link"}
            to="/FamilieSieger"
          >
            Über uns
          </NavLink>
          <NavLink
            className={pathname === "/Karriere" ? "active-link" : "link"}
            to="/Karriere"
          >
            Karriere
          </NavLink>
          <NavLink
            className={pathname === "/Kontakt" ? "active-link" : "link"}
            to="/Kontakt"
          >
            Kontakt
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
