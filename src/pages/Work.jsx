import React from "react";
import WorkCard from "../components/WorkCard";
import "../App.css";
import useScrollReveal from "../hooks/useScrollReveal";

import uiuxImg from "../assets/uiux.jpg";
import videoImg from "../assets/video.jpg";


const Work = () => {
  useScrollReveal();
  return (
    <section className="work-page work-motion">

      <div className="work-header reveal">
        <h1 className="text-reveal">Our Work</h1>
        <p className="reveal">Explore the creative solutions crafted by WebCraft.</p>
      </div>

      <div className="work-grid">

        <WorkCard
  title="UI / UX Design"
  image={uiuxImg}
  link="/webdevelopment"
/>

<WorkCard
  title="Video Editing"
  image={videoImg}
  link="/work/video"
/>

      </div>

    </section>
  );
};

export default Work;