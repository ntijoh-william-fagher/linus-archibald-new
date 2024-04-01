import React from "react";
import Footer from "../components/Footer";
import "../App.css";
import "../views/views-css/Start.css";
import SectionCreator from "../components/SectionCreator";
import PortraitSection from "../components/PortraitSection";
import linusLight2 from "../images/linus-19.jpg";
import bigMountain from "../images/linus-11.jpg";
import kletter2 from "../images/sommar2/kletter2.jpg";
import linus8 from "../images/linus-8.jpg";

export default function Winter() {
  return (
    <div className="Paralax-container">
      <div className="top-name-container" id="winter-header">
        <h1>Winter Activities</h1>
      </div>
      <SectionCreator img={linusLight2} />
      <PortraitSection
        imgSrc={linus8}
        altText={""}
        isInverted={false}
        importedClass={"start-section"}
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
        imgSrc={kletter2}
        altText={""}
        isInverted={true}
        importedClass={"start-section"}
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
      <SectionCreator img={bigMountain} />
      <Footer importerClassName={"start-section"} />
    </div>
  );
}
