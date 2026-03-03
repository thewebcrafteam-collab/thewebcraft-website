import React from "react";
import { useNavigate } from "react-router-dom";

const ContactCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="contact-cta reveal">
      <div className="contact-cta-container">

        <h2 className="contact-cta-title text-reveal">
          READY TO BUILD <br />
          SOMETHING <span className="power">POWERFUL?</span>
        </h2>

        <p className="contact-cta-text reveal">
          Let’s build something amazing together. Share your ideas,
          and we’ll bring them to life with strategy, creativity,
          and technology.
        </p>

        <button className="contact-cta-btn reveal"
          onClick={() => navigate("/contact")}
        >
          LET'S TALK
        </button>

      </div>
    </section>
  );
};

export default ContactCTA;