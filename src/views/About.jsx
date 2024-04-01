import React from "react";
import "../App.css";
import "../views/views-css/About.css";
import Footer from "../components/Footer";
import SectionCreator from "../components/SectionCreator";
import PortraitImage from "../components/PortraitImage";
import PortraitSection from "../components/PortraitSection";
import linusLight2 from "../images/linus-19.jpg";
import linusDark from "../images/linus-6.jpg";
import bigMountain from "../images/linus-11.jpg";
import hercules from "../images/sommar2/hercules.jpg";
import horisont2 from "../images/sommar2/horisont2.jpg";
import linus3 from "../images/linus-3.jpg";
import greyGod from "../images/sommar2/gud2.jpg";

export default function About() {
  return (
    <div className="Paralax-container">
      <div className="top-name-container" id="about-me-header">
        <h1>About Me</h1>
      </div>
      <SectionCreator img={linusDark} className={"about-me-section"} />
      <SectionCreator
        sectionClass={"image-free foreground linusHeader about-section"}
        img={""}
        isInverted={"isInverted"}
        header={"Linus Archibald"}
        paragraph={`I came to Engelberg in 2007, As a ski bum I have dedicated my life to skiing and mountain climbing. I love being out there—a mix of fresh air, silence, exercise, and beautiful mountains. After many years in my new home mountains, I'm still not tired of them.\n
          
          Being able to take clients into the alpine environment, show them my secret spots and discover new places together inspires me. Giving customers the best possible mountain experience is not just my job, it's my passion!
          `}
      />
      <PortraitSection
        imgSrc={hercules}
        altText={""}
        isInverted={false}
        importedClass={"about-me-section"}
        textContainer={[
          {
            header: "Freeride guiding in Engelberg,",
            paragraph:
              "Ski guiding on my home mountains, Titlis and Brunni. I am highly motivated to show you my favorite runs and find the best snow for the day.",
          },
          {
            header: "Ski technique off-piste,",
            paragraph:
              "With several years of experience as a ski instructor (SLAO 4), I offer off-piste ski technique lessons. We learn the basics in off-piste skiing, easy-to-steep terrain. Beginners or skilled skiers, everyone who wants to take a few steps forward in their skiing.",
          },
        ]}
      />
      <PortraitSection
        imgSrc={horisont2}
        altText={""}
        isInverted={true}
        importedClass={"about-me-section"}
        textContainer={[
          {
            header: "Ski touring course. For everyone!",
            paragraph:
              "Beginners who want to try ski touring for the first time, and discover new opportunities in the mountains. And for the advanced skier who wants to start moving out into the backcountry.",
          },
          {
            header: "Freeride guiding in Engelberg,",
            paragraph:
              "Ski guiding on my home mountains, Titlis and Brunni. I am highly motivated to show you my favorite runs and find the best snow for the day.",
          },
        ]}
      />
      <SectionCreator img={greyGod} className={"about-section"} />
      <Footer importerClassName={"about-me-section"} />
    </div>
  );
}
