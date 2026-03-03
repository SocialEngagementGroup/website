import React from "react";
import Image from "next/image";

const TrustBar = ({ heading, description }) => {
  const logos = [
    "aref-black.webp",
    "capiton-black.webp",
    "fjh-black.webp",
    "gt-black.webp",
    "gravy-stack-black.webp",
    "infuse-black.webp",
    "mfc-black.webp",
    "nipa-black.webp",
    "rastegar-black.webp",
    "sc-black.webp",
    "smf-black.webp",
    "sporcle-black.webp",
  ];

  return (
    <section className="bg-[#975554] py-16 md:py-24 overflow-hidden relative">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-33.3333%, 0, 0); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 30s linear infinite;
            width: max-content;
            will-change: transform;
          }
        `}
      </style>
      
      {/* Text Content - Constrained */}
      <div className="container-fluid w-[90%] md:w-[78%] mx-auto text-center text-white relative z-10 px-6">
        <h2 className="text-white text-center mb-6 leading-tight">
          {heading || "Top Clients & Partners"}
        </h2>
        <p className="text-[16px] md:text-[18px] opacity-90 max-w-[1040px] mx-auto mb-8 font-sans">
          {description ||
            "We've helped businesses across various industries achieve sustainable growth and establish strong digital authority."}
        </p>

        {/* Divider */}
        <div className="w-16 h-[2px] bg-white/40 mx-auto mb-12"></div>
      </div>

      {/* Logos Container with Marquee - Full Width on Mobile, Constrained on Web */}
      <div className="relative overflow-hidden mt-8 w-full md:max-w-[1200px] mx-auto">
        <div className="animate-marquee flex items-center">
          {[1, 2, 3].map((setIdx) => (
            <div key={`logo-set-${setIdx}`} className="flex items-center gap-8 md:gap-12 pr-8 md:pr-12 flex-shrink-0">
              {logos.map((logo, index) => (
                <div key={`logo-${setIdx}-${index}`} className="relative flex items-center justify-center">
                  <Image
                    src={`/assets/images/client-logos/${logo}`}
                    alt="Client Logo"
                    width={200}
                    height={100}
                    className="h-12 md:h-13 w-auto object-contain brightness-0 invert opacity-90"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        
        {/* Responsive Fade Gradients at Edges */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#975554] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#975554] to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default TrustBar;
