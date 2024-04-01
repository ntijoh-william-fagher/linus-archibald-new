import React from "react";
import "./component-css/PortraitText.css";

import LinkComponent from "./LinkComponent";

export default function PortraitText({
  textContainer,
  linkDestination,
  linkText,
  portraitClassName,
}) {
  const isTextContainerValid = Array.isArray(textContainer);

  return (
    <div className={`portrait-text-container ${portraitClassName}`}>
      {isTextContainerValid &&
        textContainer.map((section, index) => (
          <div key={index}>
            {section.header && (
              <h1 className="portrait-text-header">{section.header}</h1>
            )}
            <div className="h3olink">
              {section.subHeader && <h3>{section.subHeader}</h3>}
              {section.subHeader && (
                <LinkComponent
                  linkDestination={linkDestination}
                  linkText={linkText}
                />
              )}
            </div>
            <h4>{section.paragraph}</h4>
          </div>
        ))}
    </div>
  );
}
