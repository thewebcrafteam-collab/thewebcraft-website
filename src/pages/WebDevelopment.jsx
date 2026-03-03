import React from "react";
import "../App.css";
import project1 from "../assets/projects/project1.mp4";
import project2 from "../assets/projects/project2.mp4";
import project3 from "../assets/projects/project3.mp4";
import project4 from "../assets/projects/project4.mp4";
import MagneticCard from "../components/MagneticCard";
import uiShowcase from "../assets/webdev/ui-showcase.jpg";
import experienceImg from "../assets/webdev/experience.jpg";
const projects = [
  {
    video: project1,
    link: "https://charithawebcraft.netlify.app/",
    title: "Portfolio"
  },
  {
    video: project2,
    link: "https://cartora.netlify.app/",
    title: "CARTORA"
  },
  {
    video: project3,
    link: "https://pma.design/",
    title: "PMA Design"
  },
  {
    video: project4,
    link: "https://www.arayabagh.com/",
    title: "Aryabagh"
  }
];

const WebDevelopment = () => {
  return (
    <div className="webdev-page">

      {/* ================= HERO ================= */}
      <section className="webdev-hero">
        <span className="webdev-badge">SMART WEB EXPERIENCES</span>

        <h1>
          BUILT BY <span>WEBCRAFT</span>
        </h1>
      </section>


      {/* ================= PROJECT GRID ================= */}
      <section className="webdev-projects">

  {projects.map((project, index) => (
    <a
      key={index}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card magnetic-card"
    >

      {/* VIDEO */}
      <video
        src={project.video}
        autoPlay
        muted
        loop
        playsInline
        className="project-video"
      />

      {/* DARK GRADIENT */}
      <div className="project-gradient" />

      {/* TEXT + ARROW */}
      <div className="project-info">
        <h3>{project.title}</h3>

        <div className="project-arrow">
          →
        </div>
      </div>

    </a>
  ))}

</section>


      {/* ================= SECTION 1 ================= */}
      <section className="webdev-split">

        <div className="split-image">
  <div className="split-image-wrapper">
    <img src={uiShowcase} alt="UI Showcase" />
  </div>
</div>

        <div className="split-text">
          <h2>Custom UI/UX, Built to Perform</h2>

          <p>
            We design intuitive, high-performance websites tailored
            to your brand and business goals. From sleek landing
            pages to scalable platforms, every interaction is crafted
            for clarity, speed, and conversion.
          </p>
        </div>

      </section>


      {/* ================= SECTION 2 ================= */}
      <section className="webdev-split reverse">

        <div className="split-text">
          <h2>Crafting Unique User Journeys</h2>

          <p>
            Every experience is optimized for engagement and growth.
            We combine design thinking with performance engineering
            to deliver seamless navigation and meaningful interactions.
          </p>
        </div>

        <div className="split-image">
  <div className="split-image-wrapper">
    <img src={experienceImg} alt="Experience" />
  </div>
</div>

      </section>


      {/* ================= CTA ================= */}
      <section className="webdev-cta">

        <h2>
          Ready to bring your vision to life?
        </h2>

        <button
          onClick={() => window.location.href="/contact"}
          className="webdev-btn"
        >
          Get in Touch →
        </button>

      </section>

    </div>
  );
};

export default WebDevelopment;