import React from "react";
import Image from "next/image";

import "../../public/css/component-css/PortraitSection.css";
import "../../public/css/component-css/PortraitImage.css";
import "../../public/css/component-css/PortraitText.css";

export default function SectionCreator({
  sectionClass,
  img,
  isInverted,
  header,
  subHeader,
  paragraph,
  textContainer,
  id,
}) {
  // Create multiple headers and paragraphs

  if (img === "") {
    return (
      <section id={id}>
        <div className={`section-container ${sectionClass} ${isInverted}`}>
          <h1 className="section-creator-header">{header}</h1>
          <h2>{subHeader}</h2>
          <h4>{paragraph}</h4>
        </div>
      </section>
    );
  }

  return (
    <div className={`section-container background ${sectionClass}`} id={id}>
      <Image src={img} alt="" />
    </div>
  );
}
