import React from "react";
import "../App.css";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import useScrollReveal from "../hooks/useScrollReveal";


const Contact = () => {
  useScrollReveal();
  return (
    <div className="contact-page contact-motion">

      {/* NEW CONTACT LAYOUT */}
      <section className="contact-hero reveal">

        {/* LEFT SIDE INTRO */}
        <div className="contact-intro">
          <h1 className="text-reveal">GET IN TOUCH</h1>

          <p className="reveal">
            Tell us about your project. Let's build something impactful together.
            We focus on strategy, design, and growth-driven solutions.
          </p>
        </div>

        {/* RIGHT SIDE FORM */}
        <ContactForm />

      </section>

      {/* CONTACT INFO */}
      <ContactInfo />

    </div>
  );
};

export default Contact;