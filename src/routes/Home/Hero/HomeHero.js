import React, { useEffect, useState } from "react";
import "./HomeHero.css";
import heroimg from "../../../images/rewe_von_außen.webp";
import siegerLogo from "../../../images/Rewe_Dein_Markt_Logo.webp";
import { motion } from "framer-motion";

const HomeHero = () => {
  /// Track if this is the first visit in the session
  const [firstVisit, setFirstVisit] = useState(
    sessionStorage.getItem("hasVisited")
  );

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      // If no session record exists, this is the first visit in this session
      sessionStorage.setItem("hasVisited", "true");
      setFirstVisit(sessionStorage.getItem("hasVisited"));
    }
    console.log("Only once");
  }, []);

  const heroImgVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    staticVisible: {
      opacity: 1,
      transition: { duration: 0 },
    },
  };
  const heroTextContentVariants = {
    hidden: {
      y: "150%", // Starts off-screen below
    },
    visible: {
      y: 0, // Moves up into view
      transition: {
        duration: 1.5, // Similar to GSAP's duration
        ease: [0.2, 1, 0.2, 1], // Ease similar to power4.out
        delay: 1.4,
      },
    },
    staticVisible: {
      y: 0,
      transition: {
        duration: 0,
      },
    },
  };
  const heroTextTitelVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 8,
        mass: 0.5,
        duration: 0.8,
        delay: 1.8,
      },
    },
    staticVisible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0,
      },
    },
  };
  const heroTextImgVariants = {
    hidden: {
      opacity: 0,
      x: 40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 0.8,
        duration: 0.8,
        delay: 2,
      },
    },
    staticVisible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0,
      },
    },
  };
  return (
    <div id="homehero">
      <div id="home-hero-black-screen" />
      <motion.img
        id="homehero-img"
        src={heroimg}
        alt="Rewe Filiale von Außen"
        variants={heroImgVariants}
        initial="hidden"
        animate={firstVisit ? "staticVisible" : "visible"} // Nur beim ersten Besuch abspielen
      />
      <motion.div
        className="homehero-text-content"
        variants={heroTextContentVariants}
        initial="hidden"
        animate={firstVisit ? "staticVisible" : "visible"} // Nur beim ersten Besuch abspielen
      >
        <div className="homehero-text-content-center">
          <motion.h1
            variants={heroTextTitelVariants}
            initial="hidden"
            animate={firstVisit ? "staticVisible" : "visible"} // Nur beim ersten Besuch abspielen
          >
            Herzlich Willkommen zu
          </motion.h1>
          <motion.img
            src={siegerLogo}
            alt="Logo der Rewe Filiale"
            variants={heroTextImgVariants}
            initial="hidden"
            animate={firstVisit ? "staticVisible" : "visible"} // Nur beim ersten Besuch abspielen
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HomeHero;
