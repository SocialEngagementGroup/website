import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle"; // Section heading component
import ParallaxSlider from "./ParallaxSlider";           // Main parallax slider component


const ParallaxSliderSection = () => {
  return (
    // Section wrapper with ID for navigation
    <section id="services" className="bg-[linear-gradient(180deg,#E3D3CC_62.5%,#FFFFFF_100%)] relative z-20">

      {/* Container for section content */}
      <div className="container-fluid w-[95%] mx-auto pt-10 ClientLogos text-center">

        {/* Section title */}
        <div className="text-center md:text-center section-title-custom md:mt-20 mt-0">
          <SectionTitle
            id="what-we-do"
            title="What We Do"
            subtitle2={
              <>
                Marketing solutions for every stage of your growth
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



    </section>
  );
};

export default ParallaxSliderSection;
