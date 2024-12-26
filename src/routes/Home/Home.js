import React, { useEffect } from "react";
import HomeHero from "./Hero/HomeHero";
import ReweApp from "./ReweApp/ReweApp";
import Offer from "./Offers/Offer";
import Service from "./ServiceSection/Service";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Setzt die Scroll-Position an den Anfang
  }, []);
  return (
    <div>
      <HomeHero></HomeHero>
      <Service />
      <ReweApp />
      <Offer />
    </div>
  );
};

export default Home;
