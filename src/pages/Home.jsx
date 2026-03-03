import React from "react";
import "../App.css";
import Logo3D from "../components/Logo3D";
import Expertise from "../components/Expertise";
import Process from "../components/Process";
import ContactCTA from "../components/ContactCTA";
import useScrollReveal from "../hooks/useScrollReveal";

const Home = () => {
  useScrollReveal();
  return (
    <div className="home-page home-motion">

      {/* HERO SECTION */}
      <div className="hero reveal">
        <div className="hero-left">
          <h1 className="text-reveal">
            Building <span className="accent">Brands</span><br />
            Driving <span className="accent">Growth</span>
          </h1>

          <p className="reveal">
            We craft premium digital experiences that elevate brands,
            create authority, and accelerate growth in the modern market.
          </p>

          <a href="/work" className="hero-btn reveal">
            Explore Our Work
          </a>
        </div>

        <div className="hero-right reveal-right">
          <Logo3D />
        </div>
      </div>

      {/* ABOUT PREVIEW */}
      <section className="about-preview reveal">

        <h2 className="about-title text-reveal">
          Enhanced Digital Experiences
        </h2>

        <p className="about-description reveal">
          WebCraft is a modern digital agency focused on building premium web
          experiences that drive brand growth, performance, and long-term impact.
          We combine strategy, design, and technology to craft solutions that
          elevate businesses in the digital world.
        </p>

        <p className="about-question reveal">
          Want to know more about us?
        </p>

        <a href="/about" className="about-btn reveal">
          ABOUT US
        </a>

      </section>

      <Expertise />
      <Process />
      <ContactCTA />

    </div>
  );
};

export default Home;