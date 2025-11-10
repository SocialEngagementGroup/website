'use client';

import { useRef } from 'react';
import { motion, useTransform } from 'framer-motion';
import styles from './Card.module.css';
import InnerSlider from '../../components/ParallaxSlider/InnerSlider';

const Card = ({ i, title, color, progress, range, targetScale, sliderData, isActive }) => {
  // Reference to the card container (can be used for measurements or animations)
  const container = useRef(null);

  // Scale animation based on scroll progress
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer}>
      {/* Animated card using framer-motion */}
      <motion.div
        style={{ 
          backgroundColor: color,          // Dynamic background color
          scale,                           // Scale animation from useTransform
          top: `calc(-5vh + ${i * 25}px)` // Staggered top offset per card index
        }}
        className={styles.card}
      >
        {/* Card title */}
        <h4 className="slider-title">{title}</h4>

        {/* 🔥 Inner Swiper Slider Component inside the card */}
        <InnerSlider items={sliderData} />
      </motion.div>
    </div>
  );
};

export default Card;
