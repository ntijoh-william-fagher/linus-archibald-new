// import "./component-css/NavbarMobile.css";
import "../../public/css/component-css/NavbarMobile.css";
import Link from "next/link";
import React, { useState, useEffect } from "react";

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
          <li>
            <Link href="/" className="mobile-start" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/winter" className="mobile-winter" onClick={closeMenu}>
              Winter
            </Link>
          </li>
          <li>
            <Link href="/summer" className="mobile-summer" onClick={closeMenu}>
              Summer
            </Link>
          </li>
          <li>
            <Link href="/about" className="mobile-about" onClick={closeMenu}>
              About Me
            </Link>
          </li>
          <a href="#contact" className="mobile-contact" onClick={closeMenu}>
            Contact
          </a>
        </ul>
      </div>
    </nav>
  );
}
