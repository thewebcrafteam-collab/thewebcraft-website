import React from "react";
import AboutHero from "../components/AboutHero";
import AboutIntro from "../components/AboutIntro";
import FoundationsSection from "../components/FoundationsSection";
import GetInTouch from "../components/GetInTouch";
import useScrollReveal from "../hooks/useScrollReveal";

const About = () => {
  useScrollReveal();
  return (
    <div className="about-page">
      <AboutHero />
      <AboutIntro />
      <FoundationsSection/>
       <GetInTouch />
    </div>
  );
};

export default About;