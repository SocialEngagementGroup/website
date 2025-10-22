"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import {images} from "../../../data";

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

  return (
    <div className={`space-y-4 heroSliderFade${visible ? " visible" : ""}`}>
      {Array.from({ length: rows }).map((_, rowIndex) => {
        const reverse = rowIndex % 2 === 1;
        const shift = isMobile ? 0 : rowIndex * 80; // no shift on mobile

        return (
          <div
            key={rowIndex}
            className="overflow-hidden relative reduce-margin"
            style={{ marginLeft: `${shift}px` }}
          >
            <Swiper
              modules={[Autoplay]}
              slidesPerView={"auto"}
              spaceBetween={20}
              loop={true}
              speed={6000}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
                reverseDirection: reverse,
                pauseOnMouseEnter: true,
              }}
            >
              {images.map((img) => (
                <SwiperSlide
                  key={`${rowIndex}-${img.id}`}
                  className="!w-[200px]" // ✅ fixed box width (same on mobile + desktop)
                >
                  <div className="relative border border-[#232326] overflow-hidden rounded-[10px] aspect-square transition-transform duration-500 ease-in-out hover:scale-105">
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
