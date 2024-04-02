"use client";
import React from "react";

import "../../public/css/App.css";
import "../../public/css/views-css/Start.css";

import Footer from "../components/Footer";
import SectionCreator from "../components/SectionCreator";
import PortraitSection from "../components/PortraitSection";

import lightLandscape1 from "../../public/images/linus-4.jpg";
import linusThin from "../../public/images/linus-15.jpg";
import linusMiddle from "../../public/images/linus-21-inverted.jpg";
import linusStark from "../../public/images/linus-stark.jpg";
import golf from "../../public/images/sommar2/golf.jpg";

export default function Start() {
  return (
    <div>
      <div className="top-name-container" id="start-header">
        <h1>Linus Archibald</h1>
      </div>
      <SectionCreator img={linusMiddle} />

      <PortraitSection
        imgSrc={linusStark}
        altText={""}
        isInverted={true}
        importedClass={"start-section"}
        textContainer={[
          {
            header: "I came to Engelberg in 2007, ",
            paragraph: `As a ski bum I have dedicated my life to skiing and mountain climbing. I love being out there—a mix of fresh air, silence, exercise, and beautiful mountains. After many years in my new home mountains, I'm still not tired of them.\n

            Being able to take clients into the alpine environment, show them my secret spots and discover new places together inspires me. Giving customers the best possible mountain experience is not just my job, it's my passion!
            `,
          },
        ]}
        linkDestination="about"
        linkText="Learn more about me"
      />

      <PortraitSection
        imgSrc={linusThin}
        altText={""}
        isInverted={false}
        importedClass={"start-section"}
        textContainer={[
          {
            header: "Winter Activities.",
          },
          {
            subHeader: "Freeride guiding",
            paragraph:
              "Basic beginner course. Learning the basics to be able to climb by yourself.",
          },
          {
            subHeader: "Ski technique off-piste",
            paragraph:
              "When you want to go from the climbing garden or indoor to be able to climb longer tours in a safe and efficient way.",
          },
          {
            subHeader: "Ski touring course",
            paragraph:
              "Learn essential strategies for effectively handling and resolving emergency situations.              ",
          },
          {
            subHeader: "Avalanche training",
            paragraph:
              "Guiding the mountains in the alps. Depending on level and ambitious, we will find a perfect match for you.",
          },
          {
            subHeader: "Steep skiing",
            paragraph:
              "If you like to start climbing on you're own gear and learn the craftsmanship behind the art of trad climbing.",
          },
        ]}
        linkDestination="winter"
      />

      <PortraitSection
        imgSrc={golf}
        altText={""}
        isInverted={true}
        importedClass={"start-section"}
        textContainer={[
          {
            header: "Summer Activities.",
          },
          {
            subHeader: "Climbing course",
            paragraph:
              "Basic beginner course. Learning the basics to be able to climb by yourself.",
          },
          {
            subHeader: "Multipitch climbing",
            paragraph:
              "When you want to go from the climbing garden or indoor to be able to climb longer tours in a safe and efficient way.",
          },
          {
            subHeader: "rescue courses",
            paragraph:
              "Learn essential strategies for effectively handling and resolving emergency situations.              ",
          },
          {
            subHeader: "Trad climbing",
            paragraph:
              "If you like to start climbing on you're own gear and learn the craftsmanship behind the art of trad climbing.",
          },
          {
            subHeader: "Mountaineering",
            paragraph:
              "Guiding the mountains in the alps. Depending on level and ambitious, we will find a perfect match for you.",
          },
        ]}
        linkDestination="summer"
      />

      <SectionCreator img={lightLandscape1} />
      {/* <Footer /> */}
    </div>
  );
}
export async function getServerSideProps() {
  return {
    props: {}, // Return an empty object to disable SSR
  };
}
