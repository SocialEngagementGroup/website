"use client";

import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Data list for scroll-based content (use public URLs, no imports)
const sections = [
  {
    button: "Strategy & Research",
    title:
      "Every successful campaign starts with insight. We analyze your brand, audience, and competitors to build a strategy that eliminates guesswork and drives consistent results.",
    video: "/assets/videos/animated-gifs/strategy-research.webm",
  },
  {
    button: "Creative Design",
    title:
      "Great design is more than aesthetic, it's strategic psychology. We craft visuals that tell your story, connect emotionally, and make your brand unforgettable.",
    video: "/assets/videos/animated-gifs/creative-design.webm",
  },
  {
    button: "Growth Strategy",
    title:
      "Growth is a process, not a moment. We blend creativity and analytics to design campaigns that evolve, adapt, and deliver measurable success.",
    video: "/assets/videos/animated-gifs/growth-strategy.webm",
  },
  {
    button: "Launch & Support",
    title:
      "A launch marks the start of the journey, not the end. We stay by your side to fine-tune performance, uncover new opportunities, and keep your brand evolving.",
    video: "/assets/videos/animated-gifs/launch-support.webm",
  },
];

// ✅ Single scroll-triggered section component
const SectionItem = ({ section, setActiveVideo }) => {
  const { ref } = useInView({
    threshold: 0,
    rootMargin: "-40% 0px -40% 0px",
    triggerOnce: false,
    onChange: (inView) => {
      if (inView) setActiveVideo(section.video);
    },
  });

  return (
    <div
      ref={ref}
      className="rounded-2xl space-y-5 transition-transform duration-300 flex flex-col items-center md:items-start mt-15 hover:-translate-y-1 transform"
    >
      {/* ✅ Desktop button */}
      <h3 className="hidden md:inline-block branding-btn-dsk px-5 py-2 rounded-full !text-[14px] md:!text-[18px] !font-medium !capitalize bg-[#D9D9D9] text-black transition-all">
        {section.button}
      </h3>

      {/* ✅ Mobile button */}
      <h3 className="inline-block md:hidden branding-btn-mob px-5 py-2 rounded-full !text-[14px] md:!text-[18px] !font-medium !capitalize bg-[#D9D9D9] text-black transition-all">
        {section.button}
      </h3>

      {/* ✅ Section text */}
      <p className="font-regular text-gray-800 !text-[18px] md:!text-[32px] font-normal md:font-medium !leading-[24px] md:!leading-[38px] w-[90%] md:w-full text-center md:text-start mx-auto md:mx-0">
        {section.title}
      </p>

      {/* ✅ Mobile-only video below text */}
      <div className="md:hidden w-full flex justify-center mt-4">
        <video
          className="w-full h-[50vh] min-[501px]:h-auto max-[500px]:h-[25vh] object-cover hover:scale-[1.02] transition-transform duration-300"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        >
          <source src={section.video} type="video/webm" />
        </video>
      </div>
    </div>
  );
};

// ✅ Main Sticky Scroll Section Component
const ScrollStickySections = () => {
  const [activeVideo, setActiveVideo] = useState(sections[0].video);

  return (
    <section className="scroll-smooth flex flex-col md:flex-row container mx-auto px-2 md:px-6 gap-10">
      {/* ✅ Left: Scrollable content list */}
      <div className="flex flex-col md:w-1/2 space-y-[0vh] md:space-y-[50vh] mt-0 md:mt-16 md:pb-20 pb-0">
        {sections.map((section, index) => (
          <SectionItem
            key={index}
            section={section}
            setActiveVideo={setActiveVideo}
          />
        ))}
      </div>

      {/* ✅ Right: Sticky animated video */}
      <div className="md:w-1/2 relative">
        <div className="sticky top-60 hidden md:flex justify-center items-center">
          <div className="w-full h-full relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeVideo} // change video on scroll
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full flex justify-center"
              >
                <video
                  className="aspect-square w-[500px] h-[500px] object-contain hover:scale-[1.02] transition-transform duration-300"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                >
                  <source src={activeVideo} type="video/webm" />
                </video>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollStickySections;