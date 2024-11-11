import React from "react";
import "./HomeHero.css";
import heroimg from "../../../images/rewe_von_außen.jpg";
import siegerLogo from "../../../images/sieger_logo.jpg";
import { motion } from "framer-motion";

const HomeHero = () => {
  const heroImgVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
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
  };
  return (
    <div id="homehero">
      <motion.img
        id="homehero-img"
        src={heroimg}
        alt="Rewe Filiale von Außen"
        variants={heroImgVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.div
        className="homehero-text-content"
        variants={heroTextContentVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container">
          <div className="homehero-text-content-center">
            <motion.h1 variants={heroTextTitelVariants}>
              Herzlich Willkommen zu
            </motion.h1>
            <motion.img
              src={siegerLogo}
              alt="Logo der Rewe Filiale"
              variants={heroTextImgVariants}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeHero;
