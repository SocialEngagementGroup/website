
import Image from "next/image";
import React from "react";
const IntroSection = ({ heading, description }) => {
  return (
    <section className="bg-white text-black text-center px-4 py-10 md:py-25">
      <h2 className="max-w-[1130px] mx-auto max-md:py-0 md:py-5 text-center text-[#975554]">{heading}</h2>
      <p className="max-w-[1040px] my-[20px] mx-auto px-1">{description}</p>
    </section>
  );
};

export default IntroSection;
