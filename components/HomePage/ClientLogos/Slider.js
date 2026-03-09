"use client";
import { ClientsLogo } from "../../../data/clientsData";
import Image from "next/image";

const LogoMarquee = () => {
  return (
    <div className="w-full relative py-4">
      <style>{`
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 80s linear infinite;
          width: max-content;
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>

      {/* ✅ Main marquee wrapper */}
      <div className="relative overflow-hidden w-full max-w-[1100px] mx-auto">
        <div className="animate-marquee flex items-center">
          {[1, 2].map((setIdx) => (
            <div
              key={`logo-set-${setIdx}`}
              className="flex items-center gap-12 md:gap-16 pr-12 md:pr-16 flex-shrink-0"
            >
              {ClientsLogo.map((logo, index) => (
                <div
                  key={`logo-${setIdx}-${index}`}
                  className="relative flex items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={80}
                    className="h-8 md:h-10 w-auto max-w-[120px] md:max-w-[140px] object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                    priority={setIdx === 1 && index < 6}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Responsive Fade Gradients at Edges */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default LogoMarquee;
