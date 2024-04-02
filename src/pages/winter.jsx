import React from "react";
import "../../public/css/App.css";
import "../../public/css/views-css/Winter.css";
import Footer from "../components/Footer";
import SectionCreator from "../components/SectionCreator";
import PortraitSection from "../components/PortraitSection";
import linusLight2 from "../../public/images/linus-19.jpg";
import bigMountain from "../../public/images/linus-11.jpg";
import kletter2 from "../../public/images/sommar2/kletter2.jpg";
import linus8 from "../../public/images/linus-8.jpg";

export default function Winter() {
  return (
    <>
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
      {/* <Footer importerClassName={"start-section"} /> */}
    </>
  );
}
export async function getServerSideProps() {
  return {
    props: {}, // Return an empty object to disable SSR
  };
}
