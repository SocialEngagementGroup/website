"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { images } from "../../../../data/imagesData"; // Array of image objects

// Tiny 1×1 transparent WebP used as blur placeholder on priority images
// This avoids a blank flash while the real image loads above the fold
const BLUR_DATA_URL =
  "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAkA4JZQCdAEO/gHOAAA=";

const MultiRowSlider = () => {
  const [isMobile, setIsMobile] = useState(false);
  const swiperRefs = useRef([]);

  const rows = 3;
  const imagesPerRow = Math.ceil(images.length / rows);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);

    // ── Start autoplay after a slight delay for stability ─────────────────
    const timer = setTimeout(() => {
      swiperRefs.current.forEach((swiper) => {
        if (swiper && !swiper.destroyed && swiper.autoplay) {
          swiper.autoplay.start();
        }
      });
    }, 500);

    return () => {
      window.removeEventListener("resize", checkScreen);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="space-y-4">
      {Array.from({ length: rows }).map((_, rowIndex) => {
        const reverse = rowIndex % 2 === 1;
        const shift = isMobile ? 0 : rowIndex * -70;

        const startIndex = rowIndex * imagesPerRow;
        const rowImages = images.slice(startIndex, startIndex + imagesPerRow);

        if (rowImages.length === 0) return null;

        return (
          <div
            key={rowIndex}
            className="overflow-hidden relative customSwiperSlideShadow"
            style={{ marginLeft: `${shift}px` }}
          >
            <Swiper
              modules={[Autoplay]}
              slidesPerView={"auto"}
              spaceBetween={20}
              loop={true}
              speed={8000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: reverse,
              }}
              allowTouchMove={false}
              observer={true}
              observeParents={true}
              onSwiper={(swiper) => {
                swiperRefs.current[rowIndex] = swiper;
              }}
              className="will-change-transform"
            >
              {rowImages.map((img, imgIndex) => {
                const isFirst = imgIndex === 0;

                return (
                  <SwiperSlide
                    key={`${rowIndex}-${img.id}`}
                    className="!w-[200px]"
                  >
                    <div className="relative imggg border border-black/20 overflow-hidden rounded-[12px] aspect-square shadow-lg transform-gpu">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        priority={isFirst}
                        loading={isFirst ? undefined : "lazy"}
                        sizes="200px"
                        className="object-cover will-change-transform"
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        );
      })}
    </div>
  );
};

export default MultiRowSlider;