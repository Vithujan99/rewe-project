import React from "react";
import HomeHero from "./Hero/HomeHero";
import ReweApp from "./ReweApp/ReweApp";
import Offer from "./Offers/Offer";

const Home = () => {
  return (
    <div>
      <HomeHero></HomeHero>
      <ReweApp />
      <Offer />
    </div>
  );
};

export default Home;
