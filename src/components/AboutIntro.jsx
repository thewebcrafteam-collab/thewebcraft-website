import { useEffect, useState } from "react";

const AboutIntro = () => {
  const [counts, setCounts] = useState({
    years: 0,
    projects: 0,
    clients: 0,
  });

  /* COUNT UP EFFECT */
  useEffect(() => {
    let start = 0;

    const interval = setInterval(() => {
      start += 1;

      setCounts({
        years: Math.min(start, 3),
        projects: Math.min(start * 2, 40),
        clients: Math.min(start, 25),
      });

      if (start >= 40) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about-intro">

      {/* ===== MEET WEBCRAFT ===== */}
      <div className="about-intro-top">

        <h2>MEET WEBCRAFT</h2>

        <p>
          At WebCraft, we are creators, strategists, and digital storytellers
          combined into one powerful team. We blend creativity with performance
          to craft websites, videos, and digital experiences that help brands
          grow, connect, and stand out in the modern digital world.
        </p>

        {/* COUNTERS */}
        <div className="about-stats">

          <div className="stat">
            <h3>{counts.years}+</h3>
            <span>Years Experience</span>
          </div>

          <div className="stat">
            <h3>{counts.projects}+</h3>
            <span>Projects Delivered</span>
          </div>

          <div className="stat">
            <h3>{counts.clients}+</h3>
            <span>Happy Clients</span>
          </div>

        </div>
      </div>

      {/* ===== PHILOSOPHY ===== */}
      <h2 className="about-words">
        WHAT DRIVES EVERYTHING WE CREATE
      </h2>

      {/* STRIPS */}
      <div className="about-strips">

        <div className="strip strip-green">
          COLLABORATION IS AT THE HEART OF EVERYTHING WE DO
        </div>

        <div className="strip strip-blue">
          THERE ARE NO RULES TO CREATIVITY
        </div>

        <div className="strip strip-orange">
          OUR WORK DOESN'T JUST EXIST — IT DRIVES CHANGE
        </div>

      </div>

    </section>
  );
};

export default AboutIntro;