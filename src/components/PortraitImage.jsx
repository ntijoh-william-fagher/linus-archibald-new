import React from "react";
import Image from "next/image";
import "../../public/css/component-css/PortraitImage.css";

export default function PortraitImage({ imgSrc, altText }) {
  return (
    <div className="portrait-section-image-contianer">
      <Image src={imgSrc} alt={altText} />
    </div>
  );
}
