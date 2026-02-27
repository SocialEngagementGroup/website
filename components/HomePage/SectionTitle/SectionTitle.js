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
          className={`inline-block relative after:content-[''] after:block after:w-full after:h-[5px] after:bg-[#975554] after:rounded-[14px] after:absolute after:bottom-[-10px] after:left-1/2 after:translate-x-[-50%] after:transition-all after:duration-300 md:after:left-0 md:after:translate-x-0 text-[#0A0A0A]`}
        >
          {title}
        </h3>
      )}

      {/* ---------- Main Section Title (Bottom) ---------- */}
      {subtitle && (
        <h2
          className={`w-full max-w-[500px] md:max-w-none md:w-[800px] mx-auto text-center text-gray-900 mt-8 leading-tight tracking-tight`}
        >
          {subtitle}
        </h2>
      )}

      {/* ---------- Second Heading (optional) ---------- */}
      {subtitle2 && (
        <h2
          className={`mx-auto text-gray-900 mt-2 md:mt-8 leading-tight tracking-tight`}
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
