import React from 'react';
import HeroSlider from '@/components/HomePage/HeroSection/Hero-slider/HeroSlider';
import HeroContent from '@/components/HomePage/HeroSection/Hero-contant/HeroContant';

const page = () => {
  return (
    <>
      {/* ---------- Hero Section Container ---------- */}
      <div className="min-h-screen w-full flex items-center bg-black pt-24 pb-8 md:pb-0 md:pt-0 overflow-hidden">
        <div className="w-full grid grid-cols-1 md:grid-cols-[42%_58%] items-center gap-12 md:gap-0">
          
          {/* ---------- Left Column: Hero Text Content ---------- */}
          <div className="relative z-10 w-full pl-6 md:pl-12 lg:pl-20 xl:pl-32 pr-6 md:pr-0">
            <HeroContent />
          </div>

          {/* ---------- Right Column: Hero Image Slider ---------- */}
          <div className="w-full pr-0 overflow-hidden relative" style={{ minHeight: "660px" }}>
            {/* Side fade effects */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 lg:w-48 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />
            
            <div className="md:translate-x-4 lg:translate-x-8">
              <HeroSlider />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default page;
