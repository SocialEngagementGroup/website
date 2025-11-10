'use client';

import { useEffect, useRef } from 'react';
import { useScroll } from 'framer-motion'; // For scroll-based animations
import Lenis from '@studio-freight/lenis'; // Smooth scroll library
import Card from './Card'; // Individual parallax card component
import { projects } from '../../data'; // Array of project data

export default function ParallaxSlider() {
  // Reference to the main container to track scroll
  const container = useRef(null);

  // Track vertical scroll progress relative to container
  const { scrollYProgress } = useScroll({
    target: container,          // Element to track
    offset: ['start start', 'end end'], // Start/end triggers
  });

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis(); // Create Lenis instance

    // Recursive function to continuously update scroll
    function raf(time) {
      lenis.raf(time);             // Update Lenis scroll
      requestAnimationFrame(raf);  // Continue animation frame loop
    }

    requestAnimationFrame(raf);    // Start loop
  }, []);

  return (
    // Main slider container
    <main ref={container}>
      {projects.map((project, i) => {
        // Calculate target scale for parallax effect
        // Cards further down the list scale smaller
        const targetScale = 1 - (projects.length - i) * 0.05;

        return (
          <Card
            key={`p_${i}`}          // Unique key for React
            i={i}                   // Index of the card
            {...project}            // Spread project data (title, color, sliderData)
            progress={scrollYProgress} // Pass scroll progress for animations
            range={[i * 0.25, 1]}      // Range of scroll progress for scaling
            targetScale={targetScale}  // Scale at the end of scroll
          />
        );
      })}
    </main>
  );
}
