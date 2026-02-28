'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import InnerSlider from './InnerSlider';

const Card = ({ i, title, color, scale, sliderData }) => {
  const container = useRef(null);

  return (
    <div ref={container} className="flex items-center justify-between sticky top-[150px]">
      {/* Animated card with simple scale */}
      <motion.div
        style={{
          backgroundColor: color,
          scale: scale || 1,
          top: `calc(-5vh + ${i * 25}px)`
        }}
        className="relative -top-1/4 h-[77%] w-full rounded-[25px] p-[25px] sm:p-[20px] md:p-[50px] origin-top overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.2)] border-[5px] sm:border-[7px] border-black bg-[url('/assets/background/slider-bg.jpg')] bg-cover bg-center bg-no-repeat transition-shadow duration-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.3)] flex flex-col justify-between after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.2)_60%,rgba(0,0,0,0)_100%)] after:z-[1] after:rounded-[5px] after:pointer-events-none [&>*]:relative [&>*]:z-[2]"
      >
        {/* Card title */}
        <h4 className="slider-title text-white text-center sm:text-center mt-0 sm:mt-[30px]">{title}</h4>

        {/* Inner Swiper Slider Component */}
        <InnerSlider items={sliderData} />
      </motion.div>
    </div>
  );
};

export default Card;
