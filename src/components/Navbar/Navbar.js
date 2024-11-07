import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  return (
    <div className={scroll ? "moving-navbar" : "navbar"}>
      <div id="logo-holder">LOGO</div>
      <div id="link-holder">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/FamilieSieger">
          Über uns
        </Link>
        <Link className="link" to="/Karriere">
          Karriere
        </Link>
        <Link className="link" to="/Kontakt">
          Kontakt
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
