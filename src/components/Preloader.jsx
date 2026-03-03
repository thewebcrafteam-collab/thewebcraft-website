import React, { useEffect } from "react";
import "../styles/Preloader.css";
import logo from "../assets/webcraft-title.png";

const Preloader = ({ onFinish }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); // loading duration

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="preloader">

      {/* LOADING CIRCLE */}
      <div className="loader-circle">

        {/* rotating ring */}
        <span className="ring"></span>

        {/* FIXED LOGO */}
        <img src={logo} alt="WebCraft" className="loader-logo" />

      </div>

      {/* BRAND TEXT */}
      <h1 className="loader-title">WEBCRAFT</h1>
      <p className="loader-subtitle">
        Crafting Digital Experiences
      </p>

    </div>
  );
};

export default Preloader;