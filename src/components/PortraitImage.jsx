import React from "react";
import "./component-css/PortraitImage.css";

export default function PortraitImage({ imgSrc, altText }) {
  return (
    <div className="portrait-section-image-contianer">
      <img src={imgSrc} alt={altText} className="portrait-section-image" />
    </div>
  );
}
