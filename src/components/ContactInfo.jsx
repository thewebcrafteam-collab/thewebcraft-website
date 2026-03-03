import React from "react";
import "../App.css";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
const ContactInfo = () => {
  return (
    <section className="contact-info reveal">

      <div className="contact-info-header">
        <h2>Say Hi.</h2>
        <p>Let’s start a conversation and build something meaningful together.</p>
      </div>

      <div className="contact-info-container">

        {/* EMAIL */}
        <div className="contact-card">
          <div className="contact-icon">✉</div>
          <h3>Email</h3>
          <p>thewebcrafteam@gmail.com</p>
        </div>

        {/* SOCIAL */}
        <div className="contact-card">
          <div className="contact-icon">🌐</div>
          <h3>Connect With Us</h3>

          <div className="contact-social-icons">

  <a
    href="https://instagram.com/YOUR_USERNAME"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon instagram"
  >
    <FaInstagram />
  </a>

  <a
    href="https://linkedin.com/company/YOUR_COMPANY"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon linkedin"
  >
    <FaLinkedinIn />
  </a>

</div>
        </div>

        {/* RESPONSE TIME */}
        <div className="contact-card">
          <div className="contact-icon">⏱</div>
          <h3>Response Time</h3>
          <p>We usually reply within 24 hours.</p>
          <span>Mon – Sat Availability</span>
        </div>

      </div>

    </section>
  );
};

export default ContactInfo;