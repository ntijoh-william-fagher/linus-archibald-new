import React, { useState, useEffect } from "react";
import "../public/css";
import Start from "./views/Start";
import Summer from "./views/Summer";
import Winter from "./views/Winter";
import About from "./views/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./componentsNew/Navbar";
import NavbarMobile from "./componentsNew/NavbarMobile";

export default function App() {
  // State to track window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  // Define a breakpoint for mobile screens
  const mobileBreakpoint = 768; // Example breakpoint

  return (
    <Router>
      {windowWidth <= mobileBreakpoint ? <NavbarMobile /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/winter" element={<Winter />} />
        <Route path="/summer" element={<Summer />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
