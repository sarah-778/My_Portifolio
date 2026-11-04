import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navebar.css";
import logo from "../../assets/logo.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Hamburger Icon on the Left */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </div>

        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>

        {/* Nav Links */}
        <ul className={isOpen ? "nav-links active" : "nav-links"}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About Me</Link></li>
          <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
          <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;