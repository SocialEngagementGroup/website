import React from "react";
import styles from "./SectionTitle.module.css";

const SectionTitle = ({ title, subtitle, subtitle2, description, id }) => {
  const headerProps = id ? { "aria-labelledby": id } : {};

  return (
    <header className={`${styles.sectionHeader}`} {...headerProps}>
      {/* Main Section Title */}
      {title && (
        <h2 id={id || undefined} className={`${styles.subTitle} text-[#0A0A0A]`}>
          {title}
        </h2>
      )}

      {/* Subheading */}
      {subtitle && (
        <h3 className={`${styles.sectionTitle} text-[26px] sm:text-[32px] md:text-[48px] font-semibold text-gray-900 mt-5 md:mt-8 leading-tight`}>
          {subtitle}
        </h3>
      )}

  {/* Subheading */}
      {subtitle2 && (
        <h3 className={`${styles.sectionTitle2} text-[26px] sm:text-[32px] md:text-[40px] font-semibold text-gray-900 mt-5 md:mt-8 leading-tight`}>
          {subtitle2}
        </h3>
      )}
      {/* Optional Paragraph */}
      {description && (
        <p className="text-gray-600 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </header>
  );
};

export default SectionTitle;
