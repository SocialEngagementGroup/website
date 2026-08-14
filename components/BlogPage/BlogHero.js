import React from "react";

/**
 * BlogHero Component
 *
 * Centered hero section for the master Blog page.
 */
const BlogHero = () => {
  return (
    <section className="relative pt-24 sm:pt-32 pb-8 sm:pb-12">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10 text-center">
        {/* Headline - matches Marketing: 64px desktop, responsive down */}
        <h1 className="!text-4xl sm:!text-5xl md:!text-6xl lg:!text-[64px] font-bold text-gray-900 !leading-[1.1] tracking-tight mb-5 sm:mb-6">
          Ideas, Insights &amp; Growth
        </h1>

        {/* Subtext - centered, fuller copy */}
        <p className="!text-base sm:!text-lg md:!text-xl text-gray-600 !leading-relaxed max-w-2xl mx-auto">
          Practical, no-fluff thinking on marketing, branding, SEO, and
          technology — straight from the team building it every day. Real
          strategies, honest lessons, and ideas you can put to work right away.
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
