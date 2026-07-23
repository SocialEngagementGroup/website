import React from "react";
import Link from "next/link";
import { Zap } from "lucide-react";

const HeroContant = () => {
  return (
    // ✅ Main wrapper for hero content — centred over the spiral
    <div className="mx-auto flex max-w-4xl flex-col items-center text-center space-y-8">

      {/* ✅ Main heading */}
      <h1 className="font-bold text-white leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-6xl xl:text-7xl [text-shadow:0_2px_40px_rgba(0,0,0,0.9)]">
        Where Human <br className="hidden md:block" />
        Creativity Meets <br className="hidden md:block" />
        AI-Powered Growth
      </h1>

      {/* ✅ Subtext paragraph */}
      <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl font-medium [text-shadow:0_2px_24px_rgba(0,0,0,0.9)]">
        We tell your story across every digital touchpoint, blending creativity and automation so your business grows & converts.
      </p>

      {/* ✅ Hero button - Matches Navbar design! */}
      <Link href="#contact" className="inline-block mt-4 lg:mt-6">
        <button
          className="group flex items-center gap-2 bg-[#975554] text-white px-8 py-3 lg:px-10 lg:py-4 rounded-full font-sans font-bold text-[18px] md:text-[20px] transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl"
        >
          <span>Get Your Quote</span>
          <Zap className="w-5 h-5 md:w-6 md:h-6 fill-white" />
        </button>
      </Link>
    </div>
  );
};

export default HeroContant;
