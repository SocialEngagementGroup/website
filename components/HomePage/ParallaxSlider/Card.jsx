'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import InnerSlider from './InnerSlider';

const Card = ({ i, title, color, scale, sliderData }) => {
  const container = useRef(null);

  return (
    <div ref={container} className="flex items-center justify-between sticky top-[110px] sm:top-[120px]">
      {/* Animated card with simple scale */}
      <motion.div
        style={{
          backgroundColor: color,
          scale: scale || 1,
          top: `calc(-2vh + ${i * 20}px)`
        }}
        className="relative h-[65vh] sm:h-[80vh] md:h-[75vh] w-full rounded-[25px] p-[20px] sm:p-[25px] md:p-[40px] origin-top overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.2)] border-[5px] sm:border-[7px] border-black transition-shadow duration-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.3)] flex flex-col justify-center items-center gap-2 sm:gap-4 will-change-transform"
      >
        {/* Performant Blurred Background */}
        <div 
          className="absolute inset-0 bg-[url('/assets/images/backgrounds/slider-bg.webp')] bg-cover bg-center bg-no-repeat blur-[2px] scale-102 opacity-70 pointer-events-none"
          style={{ zIndex: 0 }}
        />
        
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.3)_60%,rgba(0,0,0,0.1)_100%)] pointer-events-none"
          style={{ zIndex: 1 }}
        />

        {/* Content Container */}
        <div className="relative z-[2] w-full flex flex-col justify-center items-center gap-2 sm:gap-4">
          {/* Card title */}
          <h4 className="slider-title text-white text-center w-full m-0">{title}</h4>
          
          {/* Inner Swiper Slider Component */}
          <InnerSlider items={sliderData} />
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
