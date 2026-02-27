"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { images } from "../../../../data"; // Array of image objects

// Tiny 1×1 transparent WebP used as blur placeholder on priority images
// This avoids a blank flash while the real image loads above the fold
const BLUR_DATA_URL =
  "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAkA4JZQCdAEO/gHOAAA=";

const MultiRowSlider = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // Hold references to each Swiper instance so we can start autoplay after idle
  const swiperRefs = useRef([]);

  const rows = 3; // Total number of slider rows
  const imagesPerRow = Math.ceil(images.length / rows);

  useEffect(() => {
    setVisible(true);
    const checkScreen = () => setIsMobile(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);

    // ── Defer autoplay until browser is idle ─────────────────────────────────
    // Prevents Swiper from competing with LCP paint on initial load.
    const startAutoplay = () => {
      swiperRefs.current.forEach((swiper) => {
        if (swiper && !swiper.destroyed) {
          swiper.autoplay.start();
        }
      });
    };

    let idleId;
    if (typeof requestIdleCallback !== "undefined") {
      // Fire when the browser has spare cycles (max wait: 2 s)
      idleId = requestIdleCallback(startAutoplay, { timeout: 2000 });
    } else {
      // Safari fallback
      idleId = setTimeout(startAutoplay, 1500);
    }

    return () => {
      window.removeEventListener("resize", checkScreen);
      if (typeof cancelIdleCallback !== "undefined") {
        cancelIdleCallback(idleId);
      } else {
        clearTimeout(idleId);
      }
    };
  }, []);

  return (
    <div className={`space-y-4 ${visible ? " visible" : ""}`}>
      {Array.from({ length: rows }).map((_, rowIndex) => {
        const reverse = rowIndex % 2 === 1;
        const shift = isMobile ? 0 : rowIndex * -70;

        const startIndex = rowIndex * imagesPerRow;
        const rowImages = images.slice(startIndex, startIndex + imagesPerRow);

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
              loop={true}
              speed={6000}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
                reverseDirection: reverse,
                pauseOnMouseEnter: true,
              }}
              // Stop autoplay immediately on init; it will restart on idle (see useEffect)
              onSwiper={(swiper) => {
                swiperRefs.current[rowIndex] = swiper;
                swiper.autoplay.stop();
              }}
            >
              {rowImages.map((img, imgIndex) => {
                // First image in each row is visible above the fold → prioritize it
                const isFirst = imgIndex === 0;

                return (
                  <SwiperSlide
                    key={`${rowIndex}-${img.id}`}
                    className="!w-[200px]"
                  >
                    <div className="relative imggg border border-[#232326] overflow-hidden rounded-[10px] aspect-square transition-transform duration-500 ease-in-out">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        // Priority-load only the first slide per row (LCP candidates)
                        priority={isFirst}
                        // Lazy-load everything else — defers off-screen image requests
                        loading={isFirst ? undefined : "lazy"}
                        // Tell the browser the rendered size so it picks the right srcset
                        sizes="200px"
                        // Blur-up placeholder on priority images to avoid blank flash
                        placeholder={isFirst ? "blur" : undefined}
                        blurDataURL={isFirst ? BLUR_DATA_URL : undefined}
                        className="object-cover rounded-[10px]"
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