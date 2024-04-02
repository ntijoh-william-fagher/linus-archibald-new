import "../../public/css/component-css/PortraitSection.css";
import "../../public/css/component-css/PortraitImage.css";
import "../../public/css/component-css/PortraitText.css";
import PortraitImage from "./PortraitImage";
import PortraitText from "./PortraitText";

import React from "react";

export default function ({
  imgSrc,
  altText,
  isInverted,
  textContainer,
  linkDestination,
  linkText,
  importedClass,
}) {
  const portraitClassName = `${importedClass ? ` ${importedClass}` : ""}`;

  return (
    <div
      className={`portrait-section${portraitClassName} portrait-is-reversed-${isInverted}`}
      // style={{ flexDirection: isInverted ? "row-reverse" : "row" }}
    >
      <PortraitText
        textContainer={textContainer}
        linkDestination={linkDestination}
        linkText={linkText}
        portraitClassName={portraitClassName}
      />
      <PortraitImage imgSrc={imgSrc} altText={altText} />
    </div>
  );
}
