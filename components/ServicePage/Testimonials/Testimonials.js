"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ArrowDownRight } from 'lucide-react';
import { allTestimonials } from '../../../data/testimonialsData';

const testimonials = allTestimonials;

const AUTO_PLAY_INTERVAL = 5000;
const PAUSE_AFTER_CLICK = 8000;

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pausedUntilRef = useRef(0);
  const intervalRef = useRef(null);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const handleManualNav = useCallback((direction) => {
    pausedUntilRef.current = Date.now() + PAUSE_AFTER_CLICK;
    direction === 'next' ? next() : prev();
  }, [next, prev]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (Date.now() >= pausedUntilRef.current) {
        next();
      }
    }, AUTO_PLAY_INTERVAL);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [next]);

  const current = testimonials[currentIndex];

  return (
    <section className="py-12 md:py-32 bg-[#975554] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center lg:items-center justify-between">
          
          {/* Left Column: Intro & Nav */}
          <div className="w-full lg:w-[35%] relative">
            <div className="relative">
              {/* Background Quote Mark SVG */}
              <Quote className="absolute -top-[80px] lg:-top-[140px] -left-12 lg:-left-24 w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] text-[#7a4443] opacity-[0.15] pointer-events-none stroke-[1]" />
              <h2 className="font-heading relative z-10 text-3xl md:text-5xl font-bold text-white mb-4 lg:mb-12 leading-tight text-center lg:text-left">
                What our clients <br /> are saying
              </h2>
            </div>
            
            {/* Navigation - Desktop (Shown on LG+) */}
            <div className="hidden lg:flex items-center gap-6 mt-12 w-full max-w-[280px]">
              <button 
                onClick={() => handleManualNav('prev')}
                className="text-white/40 hover:text-white transition-colors"
                aria-label="Previous"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              
              <div className="flex-grow h-[2px] bg-white/20 relative overflow-hidden">
                <motion.div 
                  initial={false}
                  animate={{ 
                    left: `${(currentIndex / testimonials.length) * 100}%`,
                    width: `${(1 / testimonials.length) * 100}%` 
                  }}
                  className="absolute top-0 h-full bg-white"
                />
              </div>

              <button 
                onClick={() => handleManualNav('next')}
                className="text-white/40 hover:text-white transition-colors"
                aria-label="Next"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
          </div>

          {/* Right Column: Static Card Shell with Transitioning Content */}
          <div className="w-full lg:w-[60%] relative z-10 flex flex-col justify-end lg:-mt-6">
            {/* The Static Card Shell */}
            <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-lg relative min-h-[380px] sm:min-h-[400px] md:min-h-[340px] flex flex-col w-full lg:max-w-[700px] xl:max-w-[800px] lg:ml-auto mx-auto">
              
              <div className="p-6 md:p-10 lg:p-14 flex-grow overflow-hidden relative flex flex-col">
                {/* Transitioning Quote Section */}
                <div className="min-h-[200px] sm:min-h-[200px] md:min-h-[140px] mb-8 md:mb-12 relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute inset-0"
                    >
                       <p className="text-base md:text-[20px] text-[#555] font-medium leading-[1.7]">
                         &quot;{current.quote}&quot;
                       </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Fixed Author Info Section (Updates instantly but stays in position) */}
                <div className="mt-auto pt-4 flex items-center gap-4">
                  {current.image && (
                    <div className="w-13 h-13 rounded-full overflow-hidden shrink-0 shadow-sm border border-gray-100 bg-gray-50">
                      <img src={current.image} className="w-full h-full object-cover object-center" alt={current.author} />
                    </div>
                  )}
                  <div className="flex flex-col gap-0">
                    <p className="!text-[16px] md:!text-[22px] font-bold text-[#975554] tracking-tight leading-tight">{current.author}</p>
                    <p className="text-black !text-[13px] md:!text-[18px] font-medium opacity-90 leading-tight">
                      {current.role} {current.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bubble Tail (Static) */}
              <div className="absolute -bottom-2 left-16 w-8 h-8 bg-white border-r border-b border-transparent rotate-45 transform origin-top-left" />
            </div>

            {/* Navigation - Mobile (Shown on LG-) */}
            <div className="flex lg:hidden items-center gap-6 mt-10 w-full max-w-[280px] mx-auto">
              <button 
                onClick={() => handleManualNav('prev')}
                className="text-white/40 hover:text-white transition-colors"
                aria-label="Previous"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              
              <div className="flex-grow h-[2px] bg-white/20 relative overflow-hidden">
                <motion.div 
                  initial={false}
                  animate={{ 
                    left: `${(currentIndex / testimonials.length) * 100}%`,
                    width: `${(1 / testimonials.length) * 100}%` 
                  }}
                  className="absolute top-0 h-full bg-white"
                />
              </div>

              <button 
                onClick={() => handleManualNav('next')}
                className="text-white/40 hover:text-white transition-colors"
                aria-label="Next"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
