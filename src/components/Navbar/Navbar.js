import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import siegerLogo from "../../images/Familie_Sieger_RB.webp";

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
  const navVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.7, ease: "easeIn", delay: -1.5 },
    },
  };
  const logoVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeIn", delay: 0.4 },
    },
  };

  const menuItemVariantsHome = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        delay: 0.7,
      },
    },
  };
  const menuItemVariantsAbout = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        delay: 0.9,
      },
    },
  };
  const menuItemVariantsCareer = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.1,
      },
    },
  };
  const menuItemVariantsContact = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.3,
      },
    },
  };
  return (
    <motion.nav
      className={scroll ? "moving-navbar" : "navbar"}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="navbar-container">
        <div
          className={
            showMenu ? "mobile-link-holder active" : "mobile-link-holder"
          }
        >
          {/* LINKS für kleine Geräte*/}
          <NavLink
            className={pathname === "/" ? "m-active-link" : "m-link"}
            to="/"
            onClick={toggleMenu}
          >
            HOME
          </NavLink>

          <NavLink
            className={
              pathname === "/FamilieSieger" ? "m-active-link" : "m-link"
            }
            to="/FamilieSieger"
            onClick={toggleMenu}
          >
            ÜBER UNS
          </NavLink>
          <NavLink
            className={pathname === "/Karriere" ? "m-active-link" : "m-link"}
            to="/Karriere"
            onClick={toggleMenu}
          >
            Karriere
          </NavLink>
          <NavLink
            className={pathname === "/Kontakt" ? "m-active-link" : "m-link"}
            to="/Kontakt"
            onClick={toggleMenu}
          >
            Kontakt
          </NavLink>
        </div>

        <img
          className="logo-holder-img"
          src={siegerLogo}
          alt="Logo der Rewe Filiale"
          variants={logoVariants}
        />

        <div className="link-holder">
          <motion.div variants={menuItemVariantsHome}>
            <NavLink
              to="/"
              className={pathname === "/" ? "active-link" : "link"}
            >
              HOME
            </NavLink>
          </motion.div>
          <motion.div variants={menuItemVariantsAbout}>
            <NavLink
              className={pathname === "/FamilieSieger" ? "active-link" : "link"}
              to="/FamilieSieger"
            >
              ÜBER UNS
            </NavLink>
          </motion.div>
          <motion.div variants={menuItemVariantsCareer}>
            <NavLink
              className={pathname === "/Karriere" ? "active-link" : "link"}
              to="/Karriere"
            >
              KARRIERE
            </NavLink>
          </motion.div>
          <motion.div variants={menuItemVariantsContact}>
            <NavLink
              className={pathname === "/Kontakt" ? "active-link" : "link"}
              to="/Kontakt"
            >
              KONTAKT
            </NavLink>
          </motion.div>
        </div>
        <motion.div
          className="menu-icon"
          onClick={toggleMenu}
          variants={menuItemVariantsHome}
        >
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
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
