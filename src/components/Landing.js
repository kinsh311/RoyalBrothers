import React from "react";
import Header from "./Header.js";
import Stats from "./Stats.js";
import Speciality from "./Speciality.js";
import Fleet from "./Fleet.js";
import Media from "./Media.js";
import Footer from "./Footer.js";

const Landing = () => {
  return (
    <div id="home">
      <Header />

      <Stats />

      <Speciality />

      <Fleet />

      <Media />

      <Footer />
    </div>
  );
};
export default Landing;
