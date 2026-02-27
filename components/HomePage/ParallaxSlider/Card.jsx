'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Card.module.css';
import InnerSlider from './InnerSlider';

const Card = ({ i, title, color, scale, sliderData }) => {
  const container = useRef(null);

  return (
    <div ref={container} className={styles.cardContainer}>
      {/* Animated card with simple scale */}
      <motion.div
        style={{
          backgroundColor: color,
          scale: scale || 1,
          top: `calc(-5vh + ${i * 25}px)`
        }}
        className={styles.card}
      >
        {/* Card title */}
        <h4 className="slider-title">{title}</h4>

        {/* Inner Swiper Slider Component */}
        <InnerSlider items={sliderData} />
      </motion.div>
    </div>
  );
};

export default Card;
