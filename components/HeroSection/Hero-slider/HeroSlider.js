"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { images } from "../../../data"; // Array of image objects

const MultiRowSlider = () => {
  // State to trigger fade-in animation once component mounts
  const [visible, setVisible] = useState(false);
  // State to check if the screen is mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setVisible(true); // Make slider visible on mount
    const checkScreen = () => setIsMobile(window.innerWidth < 640); // Mobile breakpoint
    checkScreen();
    window.addEventListener("resize", checkScreen); // Update on resize
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const rows = 3; // Total number of slider rows

  // Calculate how many images should be in each row
  const imagesPerRow = Math.ceil(images.length / rows);

  return (
    <div className={`space-y-4 ${visible ? " visible" : ""}`}>
      {/* Loop through each row */}
      {Array.from({ length: rows }).map((_, rowIndex) => {
        const reverse = rowIndex % 2 === 1; // Reverse direction for every other row
        const shift = isMobile ? 0 : rowIndex * -70; // Horizontal shift for desktop only

        // Determine the images that belong to this row
        const startIndex = rowIndex * imagesPerRow;
        const rowImages = images.slice(startIndex, startIndex + imagesPerRow);

        // Skip row if no images are available
        if (rowImages.length === 0) return null;

        return (
          <div
            key={rowIndex}
            className="overflow-hidden relative reduce-margin customSwiperSlideShadow"
            style={{ marginLeft: `${shift}px` }} // Shift rows slightly for staggered effect
          >
            <Swiper
              modules={[Autoplay]}
              slidesPerView={"auto"} // Auto width based on content
              spaceBetween={20}      // Gap between slides
              loop={true}            // Continuous loop
              speed={6000}           // Scroll speed
              autoplay={{
                delay: 1,                 // Minimal delay for continuous motion
                disableOnInteraction: false,
                reverseDirection: reverse, // Alternate row direction
                pauseOnMouseEnter: true,   // Pause on hover
              }}
            >
              {/* Map only the images assigned to this row */}
              {rowImages.map((img) => (
                <SwiperSlide
                  key={`${rowIndex}-${img.id}`}
                  className="!w-[200px]" // Fixed width per slide
                >
                  <div className="relative imggg border border-[#232326] overflow-hidden rounded-[10px] aspect-square transition-transform duration-500 ease-in-out hover:scale-105">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover rounded-[10px]"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        );
      })}
    </div>
  );
};

export default MultiRowSlider;
