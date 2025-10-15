import React from "react";
import Media from "@/components/BrandSucceed/Media";
import Content from "@/components/BrandSucceed/Content";
import styles from "./BrandSucceed.module.css";

const BrandSucceed = () => {
  return (
    <div className={styles.wrapper}>
      {/* Centered Section Title with white text */}
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h3 className={`${styles.sectionTitle} text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-semibold text-white hero-text}` }>
          How we help <span className={`${styles.titleSpan}`}>your</span> brand succeed
        </h3>
        <p className="text-white text-base sm:text-lg mt-4 max-w-2xl">
          We combine smart strategy, bold creative, end-to-end execution, and
          actionable insights to ensure every investment drives meaningful impact.
        </p>
      </div>

      {/* Grid Layout for Content + Media */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
        <Content />
        <Media />
      </div>
    </div>
  );
};

export default BrandSucceed;
