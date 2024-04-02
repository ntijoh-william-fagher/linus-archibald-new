import React from "react";
import "../../public/css/App.css";
import "../../public/css/views-css/Summer.css";
import Footer from "../components/Footer";
import SectionCreator from "../components/SectionCreator";
import PortraitSection from "../components/PortraitSection";
import golf from "../../public/images/sommar2/golf.jpg";
import hahnen from "../../public/images/sommar2/hahnen.jpg";
import hogt from "../../public/images/sommar2/hogt.jpg";
import gud from "../../public/images/sommar2/gud.jpg";

export default function Summer() {
  return (
    <>
      <div className="top-name-container" id="summer-header">
        <h1>Summer Activities</h1>
      </div>
      <SectionCreator img={hogt} className={"summer-section"} />
      <PortraitSection
        imgSrc={golf}
        altText={""}
        isInverted={false}
        importedClass={"summer-section"}
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
        imgSrc={hahnen}
        altText={""}
        isInverted={true}
        importedClass={"summer-section"}
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

      <SectionCreator img={gud} className={"summer-section"} />
      {/* <Footer importerClassName={"summer-section"} /> */}
    </>
  );
}
export async function getServerSideProps() {
  return {
    props: {}, // Return an empty object to disable SSR
  };
}
