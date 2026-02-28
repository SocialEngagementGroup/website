import React from "react";

/**
 * CareersHero Component
 *
 * Hero section matching Marketing's design exactly.
 * Overrides global p sizing to match Marketing's responsive text.
 */
const CareersHero = () => {
  return (
    <section className="relative pt-24 sm:pt-32 pb-8 sm:pb-12">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
        <div>
          {/* "We're hiring!" badge */}
          <div className="mb-4 sm:mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-900 shadow-sm">
              We&apos;re hiring!
            </span>
          </div>

          {/* Headline - matches Marketing: 64px desktop, responsive down */}
          <h1 className="!text-4xl sm:!text-5xl md:!text-6xl lg:!text-[64px] font-bold text-gray-900 !leading-[1.1] tracking-tight mb-5 sm:mb-6">
            Be part of Our Mission
          </h1>

          {/* Subtext - matches Marketing: 16px → 18px → 20px */}
          <p className="!text-base sm:!text-lg md:!text-xl text-gray-600 !leading-relaxed">
            You&apos;re probably not a good fit.
            <br />
            But if you think you might be, ask yourself this: do you seek pressure?
            <br />
            Top performers know that pressure creates diamonds. The people who run toward the hardest problems are the ones who end up solving them.
            <br />
            If you want to tackle meaningful challenges alongside people who think deeply, move fast, and push each other to grow, with leadership that supports you — you might belong here.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareersHero;
