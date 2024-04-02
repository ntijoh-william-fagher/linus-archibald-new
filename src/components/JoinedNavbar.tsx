"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";

export default function JoinedNavbar() {
  // Initialize windowWidth with a default value that represents your mobile breakpoint or any other logic
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileBreakpoint = 768; // Example breakpoint

  // Here, you might also want to handle server-side rendering explicitly by returning null or some placeholder
  // This prevents the component from rendering on the server where windowWidth is 0
  // For example, you could do:
  if (typeof window === "undefined") return null;

  return (
    windowWidth > 0 &&
    (windowWidth <= mobileBreakpoint ? <NavbarMobile /> : <Navbar />)
  );
}
