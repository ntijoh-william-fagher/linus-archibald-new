// components/PortraitText.tsx
import React from "react";
import Link from "next/link";

interface Section {
  header?: string;
  subHeader?: string;
  paragraph: string;
}

interface Props {
  textContainer: Section[];
  linkDestination: string;
  linkText: string;
  portraitClassName?: string;
}

export const PortraitText: React.FC<Props> = ({
  textContainer,
  linkDestination,
  linkText,
  portraitClassName,
}) => {
  const isTextContainerValid = Array.isArray(textContainer);

  return (
    <div
      className={`flex flex-col justify-around gap-2 p-2 ${portraitClassName}`}
    >
      {isTextContainerValid &&
        textContainer.map((section, index) => (
          <div key={index} className="bg-blue-700 bg-opacity-50 p-3">
            {section.header && <h1 className="text-white">{section.header}</h1>}
            <div className="flex justify-between">
              {section.subHeader && (
                <h3 className="text-white">{section.subHeader}</h3>
              )}
              {section.subHeader && (
                <Link href={linkDestination}>
                  <a className="text-white hover:underline">{linkText}</a>
                </Link>
              )}
            </div>
            <h4 className="text-white">{section.paragraph}</h4>
          </div>
        ))}
    </div>
  );
};

export default PortraitText;
