import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle"; // Section heading component
import ParallaxSlider from "./ParallaxSlider";           // Main parallax slider component
import styles from "./ParallaxSliderSection.module.css"; // CSS module for styling
// import Vdo from "@/components/Vdo/Vdo";                 // Video component

const ParallaxSliderSection = () => {
  return (
    // Section wrapper with ID for navigation
    <section id="services" className={`${styles.parallaxSection}`}>

      {/* Container for section content */}
      <div className={`${styles.customTextCenter} container-fluid w-[95%] mx-auto pt-10 ClientLogos`}>
        
        {/* Section title */}
        <div className="text-center md:text-center section-title-custom md:mt-20 mt-0">
          <SectionTitle
            id="what-we-do"
            title="What We Do"
            subtitle2={
              <>
                Marketing solutions for every{" "}
                <br className="hidden sm:block" />stage of your growth
              </>
            }
            description="Crafted to deliver real results through strategy, storytelling, and AI-powered execution, all under one roof."
          />
        </div>

        {/* Parallax slider with top margin */}
        <div className="mt-20 w-[95%] mx-auto">
          <ParallaxSlider />
        </div>
      </div>

      {/* Video section below slider */}
      {/* <div className="container-fluid mx-auto">
        <Vdo src={"./videos/vdo.mp4"} />
      </div>
     */}
    </section>
  );
};

export default ParallaxSliderSection;
