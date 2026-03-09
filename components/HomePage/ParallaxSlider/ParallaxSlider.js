'use client';

import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import Card from './Card.js'; // Individual parallax card component
import { projects } from '../../../data/projectsData'; // Array of project data

export default function ParallaxSlider() {
  const container = useRef(null);
  
  // Optimized scroll tracking with framer-motion
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  return (
    // Main slider container
    <main ref={container} className="parallax-slider">
      {projects.map((project, i) => {
        // Calculate card scale based on scroll progress
        const targetScale = 1 - (projects.length - i) * 0.05;
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const cardScale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            scale={cardScale}
          />
        );
      })}
    </main>
  );
}
