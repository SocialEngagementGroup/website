import React from "react";
import Image from "next/image";

const TrustBar = ({ heading, description }) => {
  const logos = [
    "aref-black.png",
    "capiton-black.png",
    "fjh-black.png",
    "gt-black.png",
    "gravy-stack-black.png",
    "infuse-black.png",
    "mfc-black.png",
    "nipa-black.png",
    "rastegar-black.png",
    "sc-black.png",
    "smf-black.png",
    "sporcle-black.png",
  ];

  return (
    <section className="bg-[#975554] py-16 md:py-24 px-6">
      <div className="container-fluid w-[90%] md:w-[78%] mx-auto text-center text-white">
        <h2 className="text-white text-center mb-6 leading-tight">
          {heading || "Top Clients & Partners"}
        </h2>
        <p className="text-[16px] md:text-[18px] opacity-90 max-w-[1040px] mx-auto mb-8 font-sans">
          {description ||
            "We've helped businesses across various industries achieve sustainable growth and establish strong digital authority."}
        </p>

        {/* Divider */}
        <div className="w-16 h-[2px] bg-white/40 mx-auto mb-12"></div>

        {/* Logos Container */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-x-14 md:gap-y-10">
          {logos.map((logo, index) => (
            <div key={index} className="relative flex items-center justify-center">
              <Image
                src={`/assets/images/client-logos/${logo}`}
                alt="Client Logo"
                width={120}
                height={60}
                className="h-8 md:h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
