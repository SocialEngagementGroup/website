import React from "react";
import Link from "next/link";

const HeroContant = () => {
  return (
    // ✅ Main wrapper for hero content
    <div className="flex flex-col justify-start items-start h-full px-4 py-8 space-y-6">
      
      {/* ✅ Centered content container with responsive alignment */}
      <div className="absolute min-[1180px]:left-[96px] left-0 max-[1180px]:relative z-[111] max-w-screen-xl mx-auto text-center md:text-start">
        
        {/* ✅ Main heading - Matches Marketing project structure! */}
        <h1 className="font-bold text-white leading-[1.1] tracking-tight mb-6">
          Where Human <br className="hidden md:block" />
          Creativity Meets <br className="hidden md:block" />
          AI-Powered Growth
        </h1>

        {/* ✅ Subtext paragraph - Matches Marketing project structure! */}
        <p className="text-gray-300 mb-8 leading-relaxed max-w-2xl font-medium text-center md:text-start mx-auto md:mx-0">
          We tell your story across every digital touchpoint, blending creativity and automation so your business grows & converts.
        </p>

        {/* ✅ Hero button - Matches Marketing project structure! */}
        <Link href="#contact" className="inline-block">
          <button  
            className="group w-full sm:w-auto px-8 py-4 lg:px-10 lg:py-5 bg-gray-300 text-gray-900 font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-gray-400 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-xl"
          >
            Get Your Quote
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroContant;
