import React from "react";

const SectionTitle = ({ title, subtitle, subtitle2, description, id }) => {
  // Optional ARIA attribute for accessibility
  const headerProps = id ? { "aria-labelledby": id } : {};

  return (
    <header className={`px-2 md:px-10`} {...headerProps}>
      
      {/* ---------- Section Label (Top) ---------- */}
      {title && (
        <h3
          id={id || undefined}
          className={`font-heading inline-block text-[#975554] !font-extrabold !capitalize tracking-[0.2em] text-[13px] md:text-[15px] mb-6`}
        >
          {title}
        </h3>
      )}

      {/* ---------- Main Section Title (Bottom) ---------- */}
      {subtitle && (
        <h2
          className={`w-full max-w-[500px] md:max-w-none md:w-[800px] mx-auto text-center text-gray-900 leading-tight tracking-tight text-3xl md:text-5xl font-bold`}
        >
          {subtitle}
        </h2>
      )}

      {/* ---------- Second Heading (optional) ---------- */}
      {subtitle2 && (
        <h2
          className={`font-heading mx-auto text-gray-900 leading-tight tracking-tight text-3xl md:text-5xl font-bold`}
        >
          {subtitle2}
        </h2>
      )}

      {/* ---------- Optional Paragraph / Description ---------- */}
      {description && (
        <p
          className={`max-w-[500px] md:max-w-3xl text-gray-700 font-medium mt-6 leading-relaxed mx-auto`}
        >
          {description}
        </p>
      )}
    </header>
  );
};

export default SectionTitle;
