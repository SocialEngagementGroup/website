import React from "react";
import Link from "next/link";

/**
 * ContactUsHero Component
 * 
 * Uses the legal page background (Rectangle.png + blur) 
 * while maintaining the clean left-aligned typography.
 */
const ContactUsHero = () => {
  return (
    <section className="relative pt-25 md:pt-38 pb-15 md:pb-25 overflow-hidden text-white">
      {/* Legal Page Style Background */}
      <div 
        className="absolute inset-0 bg-[url('/assets/images/backgrounds/contact-bg.png')] bg-cover bg-center bg-no-repeat blur-sm transform scale-105"
        style={{ zIndex: -2 }}
      />
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/50" style={{ zIndex: -1 }} />

      <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10 text-center">
        <div>
          {/* Headline */}
          <h1 className="!text-3xl sm:!text-4xl md:!text-5xl lg:!text-6xl font-bold !leading-[1.1] tracking-tight mb-5 sm:mb-6">
            Let&apos;s Build Something That <span className="text-[#e3d3cc]">Moves Your Brand</span> Forward
          </h1>

          {/* Subtext */}
          <p className="text-gray-300 !text-lg md:!text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            Whether you need a full digital strategy, standout creative, or a performance-driven <br className="hidden md:block" /> marketing plan — our team is here to help you grow with purpose.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUsHero;
