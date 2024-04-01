import React from "react";
import { Link } from "react-router-dom";
import arrow from "../images/arrow.png";

export default function LinkComponent({ linkDestination, linkText }) {
  return (
    <div>
      <Link to={`/${linkDestination}`} className={linkDestination}>
        <h3>{linkText}</h3>
        <img src={arrow} alt="" id="arrow" />
      </Link>
    </div>
  );
}
