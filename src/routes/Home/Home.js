import React, { useEffect } from "react";
import HomeHero from "./Hero/HomeHero";
import ReweApp from "./ReweApp/ReweApp";
import Offer from "./Offers/Offer";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Setzt die Scroll-Position an den Anfang
  }, []);
  return (
    <div>
      <HomeHero></HomeHero>
      <ReweApp />
      <Offer />
    </div>
  );
};

export default Home;
