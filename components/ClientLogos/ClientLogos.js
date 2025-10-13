import React from "react";
import "./ClientLogos.css";
import Slider from "./Slider";

const ParallaxSliderSection = () => {
  return (
    <section className="py-14">
      <div className="text-center md:text-center px-4">
        <strong className="block mb-2 text-[#0A0A0A] sub-title">
          What We Do
        </strong>

        <h2 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-gray-900 section-title mt-6 leading-tight">
          We Ignite the Future, One <br className="hidden sm:block" /> Innovation
          at a Time!
        </h2>
      </div>
   <Slider/>
 
    </section>
  );
};

export default ParallaxSliderSection;
