import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Slider from "./Slider";
import style from "./ClientLogos.module.css";
const ClientLogos = () => {
  return (
    <section className={`${style.ClientLogos} py-14`}>
      {/* 👇 Alignment handled here — center on mobile, left on large screens */}
      <div className="text-center w-[95%] mx-auto py-0 md:py-15">
        <SectionTitle
          id="our-clients"
          title="Our Clients"
          subtitle2={
            <>
              Trusted by brands who care{" "}
              <br className="hidden sm:block" /> about clients and results
            </>
          }
          description="We design,  write, build, and imagine — creating everything from national campaigns to social posts with intention and edge."
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
