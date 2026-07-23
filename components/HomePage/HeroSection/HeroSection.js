import React from 'react';
import HeroSpiral from '@/components/HomePage/HeroSection/Hero-spiral/HeroSpiral';
import HeroContent from '@/components/HomePage/HeroSection/Hero-contant/HeroContant';

const page = () => {
  return (
    <>
      {/* ---------- Hero Section Container ---------- */}
      <section className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden px-6 pt-28 pb-20 md:py-0">

        {/* ---------- Background: spiralling image field ---------- */}
        <HeroSpiral />

        {/* ---------- Foreground: centred copy + CTA ---------- */}
        <div className="relative z-10 w-full">
          <HeroContent />
        </div>

      </section>
    </>
  );
};

export default page;
