import { useState } from "react";

const ServiceAccordion = ({ title, description }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`service-accordion ${open ? "open" : ""}`}
      onClick={() => setOpen(!open)}
    >
      <div className="service-header">
        <h3>{title}</h3>
        <span className={`service-icon ${open ? "rotate" : ""}`}>
          +
        </span>
      </div>

      <div className="service-content">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceAccordion;