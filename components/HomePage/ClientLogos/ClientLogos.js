import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Slider from "./Slider";

const ClientLogos = () => {
  return (
    <section id="clients" className="bg-white pt-34 pb-14 md:py-24 overflow-hidden relative">
      
      {/* Text Content - Constrained following TrustBar style */}
      <div className="container-fluid w-[90%] md:w-[78%] mx-auto text-center relative z-10 px-6">
        <h3 className="font-heading text-[#975554] text-[13px] md:text-[15px] !capitalize block mb-2">
          Our Clients
        </h3>
        <h2 className="font-heading text-gray-900 text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Trusted by brands that care <br className="hidden sm:block" /> as much as we do
        </h2>
        <p className="text-[16px] md:text-[18px] text-gray-700 max-w-[1040px] mx-auto mb-8 font-medium leading-relaxed">
          We partner with businesses that value authenticity, creativity, and real impact, turning ideas into campaigns that bring their visions to life.
        </p>

        {/* Divider */}
        <div className="w-16 h-[2px] bg-[#975554]/20 mx-auto mb-12"></div>
      </div>

      {/* ✅ Client logo carousel/slider container */}
      <div className="w-full">
        <Slider />
      </div>

    </section>
  );
};

export default ClientLogos;
