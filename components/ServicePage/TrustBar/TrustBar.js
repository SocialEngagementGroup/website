import React from "react";
import Image from "next/image";
import { ClientsLogo } from "../../../data/clientsData";

const TrustBar = ({ heading, description }) => {
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
            animation: marquee 60s linear infinite;
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
      <div className="relative overflow-hidden mt-8 w-full max-w-[1100px] mx-auto">
        <div className="animate-marquee flex items-center">
          {[1, 2, 3].map((setIdx) => (
            <div key={`logo-set-${setIdx}`} className="flex items-center gap-12 md:gap-16 pr-12 md:pr-16 flex-shrink-0">
              {ClientsLogo.map((logo, index) => (
                <div key={`logo-${setIdx}-${index}`} className="relative flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={80}
                    className="h-8 md:h-10 w-auto max-w-[120px] md:max-w-[140px] object-contain invert opacity-90 contrast-125 hover:opacity-100 transition-opacity duration-300"
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
