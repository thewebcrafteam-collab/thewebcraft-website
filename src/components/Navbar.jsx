import { useState } from "react";

function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="nav-container">

        <div className="logo">WebCraft</div>

        <div
          className="menu-toggle"
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>

        <div className={`nav-links ${open ? "open" : ""}`}>

          <a href="/">Home</a>
          <a href="/work">Work</a>
          <a href="/services">Services</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;