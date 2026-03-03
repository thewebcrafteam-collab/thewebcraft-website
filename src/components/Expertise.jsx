import React from "react";

const services = [
  {
    title: "Web Development",
    desc: "Fast, scalable, and premium websites built with modern technologies for performance and growth.",
  },
  {
    title: "Video Editing",
    desc: "High-quality video editing that captures attention, tells stories, and elevates your brand presence.",
  },
  {
    title: "Content Creation",
    desc: "Strategic content designed to engage audiences and communicate your brand message effectively.",
  },
  {
    title: "Social Media Management",
    desc: "Data-driven social media strategies that grow your audience and build strong digital authority.",
  },
];

const Expertise = () => {
  return (
    <section className="expertise-section reveal">

      <div className="expertise-header">
        <h2 className="text-reveal">Our Expertise</h2>
<p className="reveal">
          We craft powerful digital experiences that help brands grow,
          engage audiences, and stand out in the modern market.
        </p>
      </div>

      <div className="expertise-grid">
        {services.map((service, index) => (
          <div className="expertise-card reveal" key={index}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Expertise;