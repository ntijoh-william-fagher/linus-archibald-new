// components/PortraitImage.tsx
import Image from "next/image";
import React from "react";

interface Props {
  imgSrc: string;
  altText: string;
}

const PortraitImage: React.FC<Props> = ({ imgSrc, altText }) => {
  return (
    <div className="box-border h-full w-full md:w-full md:h-full">
      <Image
        // src={imgSrc}
        src="/../../public/images/linus-15.jpg"
        alt={altText}
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />
    </div>
  );
};

export default PortraitImage;
