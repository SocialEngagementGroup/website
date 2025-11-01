"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { images } from "../../../data"; // Assumed to be an array of image objects

const MultiRowSlider = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setVisible(true);
    const checkScreen = () => setIsMobile(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const rows = 3;

  // ⭐️ NEW LOGIC: Calculate how many images each row should have
  const imagesPerRow = Math.ceil(images.length / rows);

  return (
    <div className={`space-y-4 ${visible ? " visible" : ""}`}>
      {Array.from({ length: rows }).map((_, rowIndex) => {
        const reverse = rowIndex % 2 === 1;
        const shift = isMobile ? 0 : rowIndex * 80; // no shift on mobile

        // ⭐️ NEW LOGIC: Determine the sub-array of images for this specific row
        const startIndex = rowIndex * imagesPerRow;
        const rowImages = images.slice(startIndex, startIndex + imagesPerRow);

        // If the calculated slice is empty (e.g., if you have fewer than 3 images), you can skip the row or handle it.
        if (rowImages.length === 0) return null;

        return (
          <div
            key={rowIndex}
            className="overflow-hidden relative reduce-margin customSwiperSlideShadow"
            style={{ marginLeft: `${shift}px` }}
          >
            <Swiper
              modules={[Autoplay]}
              slidesPerView={"auto"}
              spaceBetween={20}
              // You might need to set loop={false} if you don't want the row's set of images to repeat itself.
              // However, typically for continuous scrolling, you DO want loop={true} as you had it.
              loop={true} 
              speed={6000}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
                reverseDirection: reverse,
                pauseOnMouseEnter: true,
              }}
            >
              {/* ⭐️ Use rowImages instead of the full images array */}
              {rowImages.map((img) => (
                <SwiperSlide
                  key={`${rowIndex}-${img.id}`}
                  className="!w-[200px]"
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