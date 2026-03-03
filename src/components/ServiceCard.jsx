import React from "react";

const ServiceCard = ({ title, description, onClick }) => {
  return (
    <div
      className="service-card magnetic"
      onClick={onClick}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="service-hover-glow"></div>
    </div>
  );
};

export default ServiceCard;