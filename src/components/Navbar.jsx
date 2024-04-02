// import "./component-css/Navbar.css";
import "../../public/css/component-css/Navbar.css";
import Link from "next/link";
import React, { useState, useEffect } from "react";

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
          <li>
            <Link href="/" className="start" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/winter" className="winter" onClick={closeMenu}>
              Winter
            </Link>
          </li>
          <li>
            <Link href="/summer" className="summer" onClick={closeMenu}>
              Summer
            </Link>
          </li>
          <li>
            <Link href="/about" className="about" onClick={closeMenu}>
              About Me
            </Link>
          </li>
          <li>
            <a href="#contact" className="about" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
