"use client";
import { ClientsLogo } from "../../../data/clientsData";
import Image from "next/image";

const LogoMarquee = () => {
  return (
    <div className="w-full relative py-4">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 18s linear infinite;
          width: fit-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      {/* ✅ Main marquee wrapper */}
      <div className="relative overflow-hidden w-full md:max-w-[1200px] mx-auto">
        <div className="animate-marquee flex items-center">
          {/* First Set of Logos */}
          <div className="flex items-center gap-4 md:gap-8 px-4 md:px-6 flex-shrink-0">
            {ClientsLogo.map((logo, idx) => (
              <div key={`logo-1-${idx}`} className="relative flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={200}
                  height={100}
                  className="h-12 md:h-13 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>

          {/* Second Set of Logos (Duplicate for seamless loop) */}
          <div className="flex items-center gap-4 md:gap-8 px-4 md:px-6 flex-shrink-0">
            {ClientsLogo.map((logo, idx) => (
              <div key={`logo-2-${idx}`} className="relative flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={200}
                  height={100}
                  className="h-12 md:h-13 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Responsive Fade Gradients at Edges */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      </div>
    </div>
  );
};

export default LogoMarquee;
