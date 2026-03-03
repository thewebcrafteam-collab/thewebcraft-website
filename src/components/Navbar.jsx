import { NavLink } from "react-router-dom";
import logo from "../assets/webcraft-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <img src={logo} alt="WebCraft Logo" />
          <span>WebCraft</span>
        </Link>

        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;