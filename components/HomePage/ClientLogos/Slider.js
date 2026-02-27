"use client";
import { ClientsLogo } from "../../../data";
import Image from "next/image";

const LogoMarquee = ({ speed = 100 }) => {
  return (
    <div className="w-full pt-12 md:pt-4 pb:7 md:pb-12 relative">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      
      {/* ✅ Main marquee wrapper */}
      <div className="relative overflow-hidden w-full group">

        {/* ✅ Moving marquee container (speed controlled via CSS variable) */}
        <div
          className="flex w-max"
          style={{ animation: `marquee ${speed}s linear infinite` }}
        >
          {/* ✅ Duplicate array to create seamless infinite loop */}
          {ClientsLogo.concat(ClientsLogo).map((logo, idx) => (
            <div
              key={idx}
              className="flex justify-center items-center px-8"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}   // specify number in pixels
                height={70}   // specify number in pixels
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* ✅ Left & right fade gradients for smooth edge fade effect */}
        <div className="absolute top-0 bottom-0 left-0 w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute top-0 bottom-0 right-0 w-20 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>

      </div>
    </div>
  );
};

export default LogoMarquee;
