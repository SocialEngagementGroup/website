'use client';

import { useRef } from 'react';
import { motion, useTransform } from 'framer-motion';
import styles from './Card.module.css';
import InnerSlider from '../../components/ParallaxSlider/InnerSlider';

const Card = ({ i, title, color, progress, range, targetScale, sliderData, isActive }) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{ backgroundColor: color, scale, top: `calc(-5vh + ${i * 25}px)` }}
        className={styles.card}
      >
        <h3 className="slider-title">{title}</h3>

        {/* 🔥 Inside Swiper Slider Component */}
      
            <InnerSlider items={sliderData} />
     
      </motion.div>
    </div>
  );
};

export default Card;
