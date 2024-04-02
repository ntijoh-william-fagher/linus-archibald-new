import React from "react";
import Link from "next/link";
import Image from "next/image";
import arrow from "../../public/images/arrow.png";

export default function LinkComponent({ linkDestination, linkText }) {
  return (
    <div>
      {/* <Link to={`/${linkDestination}`} className={linkDestination}>
        <h3>{linkText}</h3>
        <Image src={arrow} alt="" id="arrow" />
      </Link> */}
      {/* <h2>this is a link</h2> */}
    </div>
  );
}
