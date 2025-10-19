"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

// ✅ Import local images
import a1 from "./Animgif/a1.png";
import a2 from "./Animgif/a2.png";
import a3 from "./Animgif/a3.png";
import a4 from "./Animgif/a4.png";

import "./ScrollStickySections.css";
import SectionTitle from "../SectionTitle/SectionTitle";

// Sections data
const sections = [
  {
    button: "Strategy & Research",
    title:
      "Great marketing doesn’t happen by accident. We take a deep dive into your brand to uncover what makes your brand tick and what will make your audience click. A smart strategy means fewer guesses, better targeting, and way more wins.",
    image: a1,
  },
  {
    button: "Creative Design",
    title:
      "Design isn’t just about looks — it’s about purpose. Every visual element we create helps tell your story, connect emotionally, and convert effectively.",
    image: a2,
  },
  {
    button: "Growth Strategy",
    title:
      "Growth doesn’t happen overnight — it’s engineered. Through strategic campaigns and data-backed optimization, we help you scale effectively.",
    image: a3,
  },
  {
    button: "Launch & Support",
    title:
      "Your launch isn’t the finish line — it’s the beginning. We ensure your campaigns perform flawlessly and keep growing after day one.",
    image: a4,
  },
];

// ✅ Child component for each section
const SectionItem = ({ section, setActiveImage }) => {
  const { ref } = useInView({
    threshold: 0.8,
    triggerOnce: false,
    onChange: (inView) => {
      if (inView) setActiveImage(section.image);
    },
  });

  return (
    <div
      ref={ref}
      className="content-box bg-white rounded-2xl space-y-5 transition-all duration-300 giftitle flex flex-col items-center md:items-start"
    >
      <button className="px-5 py-2 rounded-full text-sm uppercase tracking-wide bg-[#D9D9D9] text-black transition-all">
        {section.button}
      </button>

      <p className="text-2xl font-regular text-gray-800 leading-relaxed giftext text-center md:text-left">
        {section.title}
      </p>

      {/* Mobile image below title */}
      <div className="md:hidden w-full flex justify-center mt-4">
        <Image
          src={section.image}
          alt={section.button}

          className="object-cover rounded-2xl shadow-xl"
          priority
        />
      </div>
    </div>
  );
};

const ScrollStickySections = () => {
  const [activeImage, setActiveImage] = useState(sections[0].image);

  return (
    <section className="scroll-sticky-section flex flex-col md:flex-row container mx-auto px-6  gap-10">

      {/* Left Side: Sections */}
      <div className="flex flex-col md:w-1/2 space-y-[0vh] md:space-y-[60vh] mt-20">
        {sections.map((section, index) => (
          <SectionItem
            key={index}
            section={section}
            setActiveImage={setActiveImage}
          />
        ))}
      </div>

      {/* Right Side: Sticky Image */}
      <div className="md:w-1/2 relative">
        <div className="sticky mx-auto top-24 transition-all duration-700 gifimage">
          <Image
            src={activeImage}
            alt="Active Section"
            width={500}
            height={500}
            className="aspect-square object-contain"
            priority
            unoptimized 
          />
        </div>
      </div>
    </section>
  );
};

export default ScrollStickySections;
