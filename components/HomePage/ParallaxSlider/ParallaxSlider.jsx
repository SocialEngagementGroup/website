'use client';

import { useRef, useState, useEffect } from 'react';
import Card from './Card'; // Individual parallax card component
import { projects } from '../../../data'; // Array of project data

export default function ParallaxSlider() {
  const container = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Lightweight scroll tracking - runs only on scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (!container.current) return;
      
      const element = container.current;
      const elementTop = element.getBoundingClientRect().top;
      const elementHeight = element.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate progress (0 to 1) when element is in view
      const progress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Main slider container
    <main ref={container} className="parallax-slider">
      {projects.map((project, i) => {
        // Simple scale calculation based on scroll progress
        const targetScale = 1 - (projects.length - i) * 0.05;
        const cardScale = 1 + (targetScale - 1) * scrollProgress;

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
