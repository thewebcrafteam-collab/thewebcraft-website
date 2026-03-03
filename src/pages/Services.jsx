import React from "react";
import "../App.css";
import ServiceAccordion from "../components/ServiceAccordion";
import useScrollReveal from "../hooks/useScrollReveal";
const services = [
  {
    title: "Web Development",
    description:
      "We design and develop high-performance websites that combine modern aesthetics with powerful functionality. Every experience is optimized for speed, scalability, and conversion — helping brands build digital authority."
  },
  {
    title: "Video Editing",
    description:
      "From shortform social media edits to cinematic storytelling, we craft engaging video experiences that capture attention and communicate your brand message effectively across platforms."
  },
  {
    title: "Content Creation",
    description:
      "Strategic content designed to attract, engage, and convert. We create visual and written assets aligned with your brand identity to maintain consistency and long-term audience growth."
  },
  {
    title: "Social Media Management",
    description:
      "We manage and grow your online presence through data-driven strategies, consistent publishing, and audience engagement — transforming social platforms into growth engines."
  }
];

const Services = () => {
   useScrollReveal();
  return (
    <div className="services-page services-motion">

      {/* HERO */}
      <section className="services-hero reveal">
        <h1 className="text-reveal">Our Services</h1>

        <p className="reveal">
          Building Brands. Driving Growth.
        </p>

        <p className="reveal">
          Comprehensive digital solutions crafted to elevate
          brands and create measurable impact in the modern market.
        </p>
      </section>

      {/* ACCORDION SERVICES */}
      <section className="service-accordion reveal">
        {services.map((service, i) => (
          <ServiceAccordion key={i} {...service} />
        ))}
      </section>

      {/* CTA */}
      <section className="services-cta reveal">
        <h2>Let’s build something impactful together.</h2>

        <button
          onClick={() => (window.location.href = "/contact")}
          className="magnetic"
        >
          Get in Touch →
        </button>
      </section>

    </div>
  );
};

export default Services;