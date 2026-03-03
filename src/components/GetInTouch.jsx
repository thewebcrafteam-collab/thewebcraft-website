import React from "react";
import { useNavigate } from "react-router-dom";

const GetInTouch = () => {
  const navigate = useNavigate();

  return (
    <section className="cta-section">
      <div className="cta-content">

        <h2>
          Ready to build something <span>extraordinary?</span>
        </h2>

        <p>
          Let’s collaborate and transform your ideas into powerful
          digital experiences that drive real impact.
        </p>

        <button
          className="cta-btn"
          onClick={() => navigate("/contact")}
        >
          Get In Touch →
        </button>

      </div>
    </section>
  );
};

export default GetInTouch;