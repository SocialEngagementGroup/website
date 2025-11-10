import React from "react";
import styles from "./HeroContant.module.css";

const HeroContant = () => {
  return (
    // ✅ Main wrapper for hero content
    <div className="flex flex-col justify-start items-start h-full px-4 py-8 space-y-6">
      
      {/* ✅ Centered content container with responsive alignment */}
      <div className={`max-w-screen-xl mx-auto text-center md:text-start ${styles.heroContent}`}>
        
        {/* ✅ Main heading */}
        <h1 className={`${styles.heroHeading} font-bold leading-snug`}>
          Where Human <br />
          Creativity Meets <br />
          AI-Powered Growth.
        </h1>

        {/* ✅ Subtext paragraph */}
        <p className={`${styles.heroSubtext} text-gray-300 max-w-xl text-center md:text-start`}>
          We tell your story across every digital touchpoint — blending creativity and automation so your business grows & converts.
        </p>

        {/* ✅ Hero button */}
        <button
          className={`
            ${styles.heroBtn} 
            bg-[#656565] text-gray-100 font-semibold
            px-6 py-3 sm:bg-gray-300 sm:text-gray-900
            sm:px-8 sm:py-3 md:px-10 md:py-4
            hover:bg-gray-400 transition cursor-pointer
            rounded-lg text-base sm:text-lg mt-4
          `}
        >
          Grow with Purpose
        </button>
      </div>
    </div>
  );
};

export default HeroContant;
