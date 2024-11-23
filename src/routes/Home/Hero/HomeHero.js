import React, { useEffect, useState } from "react";
import "./HomeHero.css";
import "./extra.css";
import heroimg from "../../../images/rewe_von_außen.jpg";
import hhimg from "../../../images/hh-img-arbeiter.png";
import siegerLogo from "../../../images/sieger_logo.jpg";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import useWindowSize from "../../../hooks/useWindowSize";

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
      y: "100%", // Starts off-screen below
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
  const { width } = useWindowSize();
  return (
    <div>
      {width > 800 ? (
        <div id="home-hero">
          <div className="hh-text-holder">
            <h1>
              Einkaufen leicht gemacht!
              <br />
              Wilkommen bei REWE FAMILIE SIEGER
            </h1>
            <p>
              Schön, dass du hier bist! Unsere Webseite ist dein einfacher Weg
              zu tollen Angeboten, frischen Produkten und einer riesigen
              Auswahl, die deinen Alltag bereichert. Egal, ob du die besten
              Preise suchst, Inspiration für dein nächstes Rezept brauchst oder
              einfach wissen möchtest, was bei uns los ist – bei uns findest du
              alles auf einen Blick.
              <br />
              <br />
              Starte jetzt deinen Besuch, stöbere durch unsere Kategorien oder
              entdecke aktuelle Aktionen und Tipps. Viel Spaß dabei
            </p>
          </div>
          <div className="hh-image">
            <img src={hhimg} alt="Zwei Arbeiter aus Rewe"></img>
          </div>
        </div>
      ) : (
        <div id="homehero">
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
            <div className="container">
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
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default HomeHero;
