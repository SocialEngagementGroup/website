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
    <section className="bg-[#975554] py-16 md:py-24 px-6 overflow-hidden">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 30s linear infinite;
            width: fit-content;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      <div className="container-fluid w-[90%] md:w-[78%] mx-auto text-center text-white relative z-10">
        <h2 className="text-white text-center mb-6 leading-tight">
          {heading || "Top Clients & Partners"}
        </h2>
        <p className="text-[16px] md:text-[18px] opacity-90 max-w-[1040px] mx-auto mb-8 font-sans">
          {description ||
            "We've helped businesses across various industries achieve sustainable growth and establish strong digital authority."}
        </p>

        {/* Divider */}
        <div className="w-16 h-[2px] bg-white/40 mx-auto mb-12"></div>

        {/* Logos Container with Marquee */}
        <div className="relative overflow-hidden mt-16">
          <div className="animate-marquee flex items-center">
            {/* First Set of Logos */}
            <div className="flex items-center gap-12 md:gap-20 px-8 md:px-12 flex-shrink-0">
              {logos.map((logo, index) => (
                <div key={`logo-1-${index}`} className="relative flex items-center justify-center">
                  <Image
                    src={`/assets/images/client-logos/${logo}`}
                    alt="Client Logo"
                    width={120}
                    height={60}
                    className="h-8 md:h-12 w-auto object-contain brightness-0 invert opacity-90"
                  />
                </div>
              ))}
            </div>

            {/* Second Set of Logos (Duplicate for infinite scroll) */}
            <div className="flex items-center gap-12 md:gap-20 px-8 md:px-12 flex-shrink-0">
              {logos.map((logo, index) => (
                <div key={`logo-2-${index}`} className="relative flex items-center justify-center">
                  <Image
                    src={`/assets/images/client-logos/${logo}`}
                    alt="Client Logo"
                    width={120}
                    height={60}
                    className="h-8 md:h-12 w-auto object-contain brightness-0 invert opacity-90"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Fade Gradients */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#975554] to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#975554] to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
