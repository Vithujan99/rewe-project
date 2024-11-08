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

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={scroll ? "moving-navbar" : "navbar"}>
      <div className="navbar-container">
        <div
          className={
            showMenu ? "mobile-link-holder active" : "mobile-link-holder"
          }
        >
          <NavLink
            className={pathname === "/" ? "active-link" : "link"}
            to="/"
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            className={pathname === "/FamilieSieger" ? "active-link" : "link"}
            to="/FamilieSieger"
            onClick={toggleMenu}
          >
            Über uns
          </NavLink>
          <NavLink
            className={pathname === "/Karriere" ? "active-link" : "link"}
            to="/Karriere"
            onClick={toggleMenu}
          >
            Karriere
          </NavLink>
          <NavLink
            className={pathname === "/Kontakt" ? "active-link" : "link"}
            to="/Kontakt"
            onClick={toggleMenu}
          >
            Kontakt
          </NavLink>
        </div>
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
        <div className="menu-icon" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
