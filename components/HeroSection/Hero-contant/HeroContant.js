import React from "react";
import styles from "./HeroContant.module.css";

const HeroContant = () => {
  return (
    <div className="flex flex-col justify-start items-start h-full px-4 py-8 space-y-6">
      <div className={`max-w-screen-xl mx-auto text-center md:text-start ${styles.heroContent}`}>
        <h1 className={`${styles.heroHeading} font-bold leading-snug`}>
          Where bold brands <br />
          break through <br />
          the noise
        </h1>

        <p className={`${styles.heroSubtext} text-gray-300 max-w-xl text-center md:text-start`}>
          From startups to enterprise, we help brands break barriers with
          tailored ad strategies, striking visuals, and data-driven results.
        </p>

        <button
          className={`
            ${styles.heroBtn} 
            bg-[#656565] text-gray-100 font-semibold
            px-6 py-2 sm:bg-gray-300 sm:text-gray-900
            sm:px-8 sm:py-2.5 md:px-10 md:py-3.5
            hover:bg-gray-400 transition cursor-pointer
            rounded-lg text-base sm:text-lg mt-4
          `}
        >
          Connect With Us
        </button>
      </div>
    </div>
  );
};

export default HeroContant;
