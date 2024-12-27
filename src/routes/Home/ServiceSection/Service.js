import React, { useEffect, useRef } from "react";
import "./Service.css";
import { CiDeliveryTruck, CiShop } from "react-icons/ci";
import gsap from "gsap";

const Service = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      if (card) {
        const handleMouseEnter = () => {
          gsap.to(card, {
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)", // Optionaler Schatten
            transformPerspective: 500,
            ease: "power2.out",
          });
        };
        const handleMouseMove = (event) => {
          const { left, top, width, height } = card.getBoundingClientRect();
          const x = event.clientX - left; // Mausposition relativ zur Karte
          const y = event.clientY - top;

          const centerX = width / 2;
          const centerY = height / 2;

          const rotateX = ((y - centerY) / centerY) * 10; // Tilt-Winkel X
          const rotateY = ((x - centerX) / centerX) * -10; // Tilt-Winkel Y

          gsap.to(card, {
            rotationX: rotateX,
            rotationY: rotateY,
            transformPerspective: 500,
            ease: "power2.out",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            scale: 1,
            boxShadow: "none",
            rotationX: 0,
            rotationY: 0,
            ease: "power2.out",
          });
        };

        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          card.removeEventListener("mouseenter", handleMouseEnter);
          card.removeEventListener("mousemove", handleMouseMove);
          card.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    });
  }, []);

  return (
    <div className="service">
      <h2>Rewe Liefer- und Abholservice</h2>
      <p>
        Nutze unseren praktischen Liefer- oder Abholservice und spare Zeit beim
        Einkaufen!
      </p>
      <div className="service-card-holder">
        <a
          ref={(el) => (cardRefs.current[0] = el)}
          className="service-card"
          href="https://shop.rewe.de/lsfk/registration/1478585"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiDeliveryTruck className="sc-icon" />
          <p>Liefer-Service direkt zu dir nach Hause</p>
        </a>

        <a
          ref={(el) => (cardRefs.current[1] = el)}
          className="service-card"
          href="https://shop.rewe.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiShop className="sc-icon" />
          <p>Abhol-Service: Bestelle online und hole deine Einkäufe ab</p>
        </a>
      </div>
    </div>
  );
};

export default Service;
