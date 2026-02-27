
import Image from "next/image";
import React from "react";
const IntroSection = ({ heading, description }) => {
  return (
    <section className="bg-white text-center px-4 py-10 md:py-25">
      <h2 className="!text-black !font-serif !font-bold max-w-[1130px] mx-auto max-md:py-0 md:py-5 !leading-tight tracking-tight">{heading}</h2>
      <p className="!text-black max-w-[1040px] my-[20px] mx-auto px-1 !p1 !font-light">{description}</p>
    </section>
  );
};

export default IntroSection;
