import React from 'react';
import HeroSlider from '@/components/HeroSection/Hero-slider/HeroSlider';
import HeroContent from '@/components/HeroSection/Hero-contant/HeroContant';

const page = () => {
  return (
    <>
      {/* ---------- Hero Section Container ---------- */}
      <div className="container-fluid mx-auto customPadding p-0 hero-section pt-16 pb-5 md:pb-15 md:pt-35 hero-section-bg">
        
        {/* ---------- Grid Layout: Hero Content + Hero Slider ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-[30%_70%]">
          
          {/* ---------- Left Column: Hero Text Content ---------- */}
          <div className="">
            <HeroContent />
          </div>

          {/* ---------- Right Column: Hero Image Slider ---------- */}
          <div className="">
            <HeroSlider />
          </div>

        </div>
      </div>
    </>
  );
};

export default page;
