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
  const swiperRefs = useRef([]);
  const [rowImagesMap, setRowImagesMap] = useState([]);

  const rows = 3;

  useEffect(() => {
    // ── Shuffle and Distribute Images ─────────────────────────────────────
    const shuffled = [...images].sort(() => Math.random() - 0.5);
    const distributed = Array.from({ length: rows }).map((_, i) => {
      const perRow = Math.ceil(shuffled.length / rows);
      const baseSet = shuffled.slice(i * perRow, (i + 1) * perRow);
      // Repeat the set to ensure smooth looping without cross-row repetition
      return [...baseSet, ...baseSet, ...baseSet, ...baseSet];
    });
    setRowImagesMap(distributed);

    // ── Start autoplay after a slight delay for stability ─────────────────
    const timer = setTimeout(() => {
      swiperRefs.current.forEach((swiper) => {
        if (swiper && !swiper.destroyed && swiper.autoplay) {
          swiper.autoplay.start();
        }
      });
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="space-y-4">
      {rowImagesMap.map((rowImages, rowIndex) => {
        const reverse = rowIndex % 2 === 1;

        if (rowImages.length === 0) return null;

        return (
          <div
            key={rowIndex}
            className="overflow-hidden relative customSwiperSlideShadow hero-slider-row"
            style={{ "--row-index": rowIndex }}
          >
            <Swiper
              modules={[Autoplay]}
              slidesPerView={"auto"}
              spaceBetween={20}
              loop={true}
              speed={5000}
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
              style={{ transitionTimingFunction: "linear" }}
            >
              {rowImages.map((img, imgIndex) => {
                const isFirst = imgIndex === 0;

                return (
                  <SwiperSlide
                    key={`${rowIndex}-${img.id}-${imgIndex}`}
                    className="!w-[200px]"
                  >
                    <div className="relative imggg border border-black/20 overflow-hidden rounded-[12px] aspect-square shadow-lg transform-gpu">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        priority={rowIndex === 0 && imgIndex < 4}
                        loading={rowIndex === 0 && imgIndex < 4 ? undefined : "lazy"}
                        sizes="(max-width: 640px) 150px, 200px"
                        quality={80}
                        className="object-cover will-change-transform"
                      />
                    </div>                  </SwiperSlide>
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