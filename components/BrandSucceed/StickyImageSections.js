"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Import local images used across sections
import a1 from "./Animgif/a1.png";
import a2 from "./Animgif/a2.png";
import a3 from "./Animgif/a3.png";
import a4 from "./Animgif/a4.png";

import "./ScrollStickySections.css";

// ✅ Data list for scroll-based content
const sections = [
  {
    button: "Strategy & Research",
    title:
      "Every successful campaign starts with insight. We analyze your brand, audience, and competitors to build a strategy that eliminates guesswork and drives consistent results.",
    image: a1,
  },
  {
    button: "Creative Design",
    title:
      "Great design is more than aesthetic, it's strategic psychology. We craft visuals that tell your story, connect emotionally, and make your brand unforgettable.",
    image: a2,
  },
  {
    button: "Growth Strategy",
    title:
      "Growth is a process, not a moment. We blend creativity and analytics to design campaigns that evolve, adapt, and deliver measurable success.",
    image: a3,
  },
  {
    button: "Launch & Support",
    title:
      "A launch marks the start of the journey, not the end. We stay by your side to fine-tune performance, uncover new opportunities, and keep your brand evolving.",
    image: a4,
  },
];

// ✅ Single scroll-triggered section component
const SectionItem = ({ section, setActiveImage }) => {
  // Detect when this section is in the viewport
  const { ref } = useInView({
    threshold: 0,
    rootMargin: "-40% 0px -40% 0px", // Fires when section is near center
    triggerOnce: false,
    onChange: (inView) => {
      if (inView) setActiveImage(section.image); // Switch active image on view
    },
  });

  return (
    <div
      ref={ref}
      className="content-box rounded-2xl space-y-5 transition-all duration-300 giftitle flex flex-col items-start mt-15"
    >
      {/* ✅ Desktop button */}
      <button className="hidden md:inline-block branding-btn-dsk px-5 py-2 rounded-full text-sm uppercase tracking-wide bg-[#D9D9D9] text-black transition-all">
        {section.button}
      </button>

      {/* ✅ Mobile button */}
      <button className="inline-block md:hidden branding-btn-mob px-5 py-2 rounded-full text-sm uppercase tracking-wide bg-[#D9D9D9] text-black transition-all">
        {section.button}
      </button>

      {/* ✅ Section text */}
      <p className="font-regular text-gray-800 leading-relaxed giftext text-start">
        {section.title}
      </p>

      {/* ✅ Mobile-only image below text */}
      <div className="md:hidden w-full flex justify-center mt-4 image-box">
        <Image
          src={section.image}
          alt={section.button}
          className="object-cover"
          priority
          unoptimized
        />
      </div>
    </div>
  );
};

// ✅ Main Sticky Scroll Section Component
const ScrollStickySections = () => {
  const [activeImage, setActiveImage] = useState(sections[0].image); // default first image

  return (
    <section className="scroll-sticky-section flex flex-col md:flex-row container mx-auto px-2 md:px-6 gap-10">
      
      {/* ✅ Left: Scrollable content list */}
      <div className="flex flex-col md:w-1/2 space-y-[0vh] md:space-y-[50vh] mt-0 md:mt-20 md:pb-35 pb-0">
        {sections.map((section, index) => (
          <SectionItem
            key={index}
            section={section}
            setActiveImage={setActiveImage}
          />
        ))}
      </div>

      {/* ✅ Right: Sticky animated image */}
      <div className="md:w-1/2 relative">
        <div className="sticky top-60 flex justify-center items-center gifimage">
          <div className="w-full h-full relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage.src} // Changes image on scroll
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full flex justify-center"
              >
                <Image
                  src={activeImage}
                  alt="Active Section"
                  width={500}
                  height={500}
                  className="aspect-square object-contain"
                  priority
                  unoptimized
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollStickySections;
