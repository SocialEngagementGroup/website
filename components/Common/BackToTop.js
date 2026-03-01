"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when scrolled down more than 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 30 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[9999] p-3 md:p-4 rounded-full bg-white text-black shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:bg-[#975554] hover:text-white transition-all duration-300 group overflow-hidden border border-white hover:border-[#975554]"
          aria-label="Back to top"
        >
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#975554]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="w-5 h-5 md:w-6 md:h-6 relative z-10 group-hover:-translate-y-1 transition-transform duration-300"
          >
            <path d="m18 15-6-6-6 6"/>
          </svg>

          {/* Tooltip hint on hover */}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Back to Top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
