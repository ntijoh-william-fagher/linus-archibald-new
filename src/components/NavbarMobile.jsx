import "./component-css/NavbarMobile.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function NavbarMobile() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleMenu = () => {
    setIsChecked(!isChecked);
  };

  const closeMenu = () => {
    setIsChecked(false);
  };

  return (
    <nav role="navigation" id="mobile-navbar">
      <div id="mobile-menuToggle">
        <input type="checkbox" checked={isChecked} onChange={toggleMenu} />
        <span></span>
        <span></span>
        <span></span>
        <ul id="mobile-menu">
          <Link to="/" className="mobile-start" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/winter" className="mobile-winter" onClick={closeMenu}>
            Winter
          </Link>
          <Link to="/summer" className="mobile-summer" onClick={closeMenu}>
            Summer
          </Link>
          <Link to="/about" className="mobile-about" onClick={closeMenu}>
            About Me
          </Link>
          <a href="#contact" className="mobile-contact" onClick={closeMenu}>
            Contact
          </a>
        </ul>
      </div>
    </nav>
  );
}
