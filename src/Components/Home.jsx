import React from "react";
import Herobanner from "./Herobanner";
import FamouseCitys from "./FamouseCitys";
import MumbaiSpots from "./MumbaiSpots";
import Activities from "./Activities";
import TopDestination from "./TopDestination";
import Hotels from "./Hotels";
import SpotsMumbai from "./Spots";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Home = () => {
  return (
    <div>
      <Navigation/>
      <Herobanner />
      <FamouseCitys />
      <SpotsMumbai />
      <Activities />
      <TopDestination />
      <Hotels />
      <Footer/>
    </div>
  );
};

export default Home;
