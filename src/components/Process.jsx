import React, { useEffect, useRef } from "react";

const processData = [
  {
    number: "01",
    title: "Discover",
    desc: "We understand your brand, audience, and goals to build a strong foundation.",
  },
  {
    number: "02",
    title: "Strategy",
    desc: "We craft a data-driven roadmap focused on positioning and growth.",
  },
  {
    number: "03",
    title: "Create",
    desc: "Design, development, and content production executed with precision.",
  },
  {
    number: "04",
    title: "Grow",
    desc: "Launch, optimize, and scale your brand with continuous improvement.",
  },
];

const Process = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".process-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${index * 0.15}s`;
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <section className="process-section reveal" ref={sectionRef}>
      <div className="process-header">
        <h2 className="text-reveal">Our Process</h2>
<p className="reveal">
          Our structured approach ensures every project is strategic,
          creative, and built for long-term growth.
        </p>
      </div>

      <div className="process-grid">
        {processData.map((item, index) => (
          <div className="process-card" key={index}>
            <span className="process-number">{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;