import React from "react";
import "../App.css";

/* IMAGES */
import foundationImg1 from "../assets/foundation-img1.jpg";
import foundationImg2 from "../assets/foundation-img2.jpg";

/* DATA */
const foundations = [
  {
    number: "01",
    title: "Our Philosophy",
    text: "Creativity fuels progress. We believe bold ideas emerge from curiosity, collaboration, and purpose.",
    type: "text",
  },
  {
    type: "image",
    image: foundationImg1,
  },
  {
    number: "02",
    title: "Our Expertise",
    text: "Strategy, design, development, and storytelling blended into performance-driven digital experiences.",
    type: "text",
    variant: "blue",
  },
  {
    number: "03",
    title: "Our Team",
    text: "Designers, developers, and storytellers working together as one integrated creative force.",
    type: "text",
    variant: "accent",
  },
  {
    number: "04",
    title: "Our Vision",
    text: "We craft digital experiences that connect brands with audiences through innovation and emotion.",
    type: "text",
  },
  {
    type: "image",
    image: foundationImg2,
  },
];

const FoundationsSection = () => {
  return (
    <section className="foundations">
      <h2 className="foundations-title">OUR FOUNDATIONS</h2>

      <div className="foundations-grid">
        {foundations.map((item, index) => (
          item.type === "image" ? (

            <div
              key={index}
              className="foundation-card image-card"
            >
              <img src={item.image} alt="foundation" />
            </div>

          ) : (

            <div
              key={index}
             className={`foundation-card text-card ${item.variant ? item.variant : "dark"}`}
            >
              <span className="foundation-number">
                {item.number}
              </span>

              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>

          )
        ))}
      </div>
    </section>
  );
};

export default FoundationsSection;