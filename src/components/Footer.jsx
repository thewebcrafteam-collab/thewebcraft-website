import React from "react";
import { Link } from "react-router-dom";
import FollowUs from "./FollowUs";
import BackToTop from "./BackToTop";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT SIDE */}
        <div className="footer-left">
          <h2 className="footer-logo">WEBCRAFT</h2>
          <p className="footer-tagline">
            Building Brands. Driving Growth.
          </p>
        </div>

        {/* CENTER — QUICK LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/work">Work</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* RIGHT — FOLLOW US */}
        <div className="footer-follow">
          <FollowUs />
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <span>© 2026 WebCraft Agency</span>
      </div>
      <BackToTop />

    </footer>
  );
};

export default Footer;