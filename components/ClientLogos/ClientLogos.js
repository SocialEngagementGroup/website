import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Slider from "./Slider";
import style from "./ClientLogos.module.css";
const ClientLogos = () => {
  return (
    <section id="clients" className={`${style.ClientLogos} py-14`}>
      {/* 👇 Alignment handled here — center on mobile, left on large screens */}
      <div className="text-center w-[95%] mx-auto py-0 md:py-15">
        <SectionTitle
          id="our-clients"
          title="Our Clients"
          subtitle2={
            <>
        
              Trusted by brands that care{" "}
              <br className="hidden sm:block" />as much as we do.
            </>
          }
          description="We partner with businesses that value authenticity, creativity, and real impact, turning ideas into campaigns that bring their visions to life."
        />
      </div>

      {/* Client Logos / Slider */}
      <div className="container-fluid w-[95%] mx-auto shadow-effect">
        <Slider />
      </div>
    </section>
  );
};

export default ClientLogos;
