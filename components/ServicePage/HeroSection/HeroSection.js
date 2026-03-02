import React from "react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/Footer/ContactForm/ContactForm";
import { Sparkles } from "lucide-react";

const HeroSection = ({
  title,
  subtitle,
  description,
  ctaButton,
  ctaLink,
  bg
}) => {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden py-0 md:py-25 font-sans md:min-h-[80vh]">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm transform scale-105"
        style={{ backgroundImage: `url(${bg})`, zIndex: 0 }}
      />
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/50" style={{ zIndex: 1 }} />

      <div
        className={`max-[1180px]:w-[100%] md:max-[1180px]:w-[95%] container-fluid w-[75%] mx-auto py-0 relative z-10`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-0 text-center md:text-start w-full">

          {/* ---------- Left Text (95vh on mobile, Auto on desktop) ---------- */}
          <div className="text-white content order-1 md:order-1 min-h-[95vh] md:min-h-0 flex flex-col justify-center pb-24 md:pb-0 px-6 md:px-0">
            <h3 className="!capitalize opacity-90 mb-4">{subtitle}</h3>
            <h1 className="!text-[38px] md:!text-[56px] lg:!text-[64px] !font-serif !font-bold !leading-[1.1] !tracking-tight">
              {title}
            </h1>

            <p className={`max-w-[665px] max-md:max-w-full my-6 md:my-10 !p1 !leading-relaxed opacity-80 font-light`}>
              {description}
            </p>


            {ctaButton && (
              <div className="flex justify-center md:justify-start">
                <Link href={ctaLink} className="block w-fit">
                  <button
                    className={`rounded-full
                      font-bold
                      px-6 py-3 bg-white text-black
                      sm:px-8 sm:py-3 md:px-10 md:py-4
                      hover:bg-[#975554] hover:text-white transition-all cursor-pointer
                      text-base sm:text-lg mt-4 shadow-xl border border-transparent
                      flex items-center gap-2
                    `}
                  >
                    <Sparkles className="w-5 h-5" />
                    {ctaButton}
                  </button>
                </Link>
              </div>
            )}
          </div>

          {/* ---------- Right Input Form (Hidden on mobile) ---------- */}
          <div className="hidden md:flex justify-center order-2 md:order-2 mt-0 md:mt-0 mb-20 md:mb-0 px-4 md:px-0">
            <div className="bg-black/80 md:bg-black/50 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl lg:max-w-[600px] lg:ml-auto w-full">
              <ContactForm layout="split" />
            </div>
          </div>
        </div>

      </div>

      {/* Scroll Indicator (Visible on Mobile only) */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none md:hidden z-20">
        <span className="font-sans text-[10px] tracking-[0.3em] text-white/70 uppercase">
          Explore
        </span>
        <div className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center p-1.5">
          <div className="w-1 h-1.5 bg-white/70 rounded-full animate-scroll-dot" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
