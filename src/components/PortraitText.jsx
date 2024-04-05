import React from "react";
import { useRouter } from "next/router";

// Your existing imports here

export default function PortraitText({
  textContainer,
  linkDestination,
  linkText,
  portraitClassName,
}) {
  const router = useRouter(); // Hook to programmatically navigate

  const isTextContainerValid = Array.isArray(textContainer);

  // Function to handle click and navigate
  const handleClick = () => {
    router.push(`/${linkDestination}`);
  };

  return (
    <div
      className={`portrait-text-container ${portraitClassName}`}
      // Add the click event to navigate
      // Optional: Change cursor to indicate clickable area
    >
      {isTextContainerValid &&
        textContainer.map((section, index) => (
          <div key={index} style={{ cursor: "pointer" }} onClick={handleClick}>
            {section.header && (
              <h1 className="portrait-text-header">{section.header}</h1>
            )}
            <div className="hover-content">
              <div className="h3olink">
                {section.subHeader && <h3>{section.subHeader}</h3>}
              </div>
              <h4>{section.paragraph}</h4>
            </div>
          </div>
        ))}
    </div>
  );
}
