import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import ParallaxSlider from "./ParallaxSlider";
import styles from "./ParallaxSliderSection.module.css";
import Vdo from "@/components/Vdo/Vdo";


const ParallaxSliderSection = () => {
  return (
    <section className={`${styles.parallaxSection}`}>
      <div className={`${styles.customTextCenter} container-fluid w-[95%] mx-auto pt-10 ClientLogos`}>
        
        {/* 👇 Alignment is handled here */}
        <div className="text-center sm:text-start section-title-custom">
          <SectionTitle
            id="what-we-do"
            title="What We Do"
            subtitle="We Ignite the Future, One Innovation at a Time!"
          />
        </div>
        <ParallaxSlider />
        
   
      </div>
      <div className="container-fluid mx-auto">
         <Vdo src={"./videos/vdo.mp4"}/>
      </div>
    
    </section>
  );
};

export default ParallaxSliderSection;
