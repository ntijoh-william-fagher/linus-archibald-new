// components/PortraitSection.tsx
import React from "react";
import PortraitImage from "./PortaitImage";
import PortraitText from "./PortraitText";

interface Props {
  imgSrc: string;
  altText: string;
  isInverted: boolean;
  textContainer: any[]; // Define a more specific type based on the structure of your textContainer
  linkDestination: string;
  linkText: string;
  importedClass?: string;
}

const PortraitSection: React.FC<Props> = ({
  imgSrc,
  altText,
  isInverted,
  textContainer,
  linkDestination,
  linkText,
  importedClass = "",
}) => {
  return (
    <div
      className={`flex ${
        isInverted ? "flex-row-reverse" : "flex-row"
      } justify-between w-full h-[120%] p-0 ${importedClass} md:h-[200%] md:flex-col`}
    >
      <PortraitText
        textContainer={textContainer}
        linkDestination={linkDestination}
        linkText={linkText}
        portraitClassName={importedClass}
      />
      <PortraitImage imgSrc={imgSrc} altText={altText} />
    </div>
  );
};

export default PortraitSection;
