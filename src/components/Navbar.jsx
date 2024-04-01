import "./component-css/Navbar.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Navbar() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleMenu = () => {
    setIsChecked(!isChecked);
  };

  const closeMenu = () => {
    setIsChecked(false);
  };

  return (
    <nav role="navigation" id="navbar">
      <div id="menuToggle">
        <input type="checkbox" checked={isChecked} onChange={toggleMenu} />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <Link to="/" className="start" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/winter" className="winter" onClick={closeMenu}>
            Winter
          </Link>
          <Link to="/summer" className="summer" onClick={closeMenu}>
            Summer
          </Link>
          <Link to="/about" className="about" onClick={closeMenu}>
            About Me
          </Link>
          <a href="#contact" className="about" onClick={closeMenu}>
            Contact
          </a>
        </ul>
      </div>
    </nav>
  );
}
