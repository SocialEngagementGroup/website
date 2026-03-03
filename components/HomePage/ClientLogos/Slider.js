"use client";
import { ClientsLogo } from "../../../data/clientsData";
import Image from "next/image";

const LogoMarquee = () => {
  return (
    <div className="w-full relative py-4">
      <style>{`
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.3333%, 0, 0); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 25s linear infinite;
          width: max-content;
          will-change: transform;
        }
      `}</style>
      
      {/* ✅ Main marquee wrapper */}
      <div className="relative overflow-hidden w-full md:max-w-[1200px] mx-auto">
        <div className="animate-marquee flex items-center">
          {[1, 2, 3].map((setIdx) => (
            <div key={`logo-set-${setIdx}`} className="flex items-center gap-4 md:gap-8 pr-4 md:pr-8 flex-shrink-0">
              {ClientsLogo.map((logo, idx) => (
                <div key={`logo-${setIdx}-${idx}`} className="relative flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={200}
                    height={100}
                    className="h-12 md:h-13 w-auto object-contain opacity-90"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Responsive Fade Gradients at Edges */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      </div>
    </div>
  );
};

export default LogoMarquee;
