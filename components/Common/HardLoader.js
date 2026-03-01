"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const HardLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Small buffer after actual load for smoothness
      setTimeout(() => {
        setLoading(false);
      }, 200);
    };

    // Check if page is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      
      // Fallback: auto-dismiss after 5s to prevent getting stuck
      const fallback = setTimeout(handleLoad, 5000);
      
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(fallback);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="hard-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black"
        >
          <div className="relative flex flex-col items-center">
            {/* Minimalist Pulsing Logo */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.9, 1, 0.9],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-20 h-20"
            >
              <Image
                src="/assets/images/site-logo/logo.svg"
                alt="SEG Logo"
                fill
                className="object-contain invert"
                priority
              />
            </motion.div>
            
            {/* Subtle progress ring or line - Dimmed and non-vibrant */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "circOut" }}
              className="mt-8 h-[4px] w-48 bg-white/30 rounded-full origin-center"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HardLoader;
