"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";

const AutoSlider = ({ slides = [] }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const wrapperRef = useRef(null);

  const [loading, setLoading] = useState(true);

  // skeleton placeholders
  const skeletonSlides = useMemo(() => Array.from({ length: 8 }), []);

  // Ensure enough slides for seamless infinite loop (max slidesPerView is 4, so we need > 4)
  const displaySlides = useMemo(() => {
    if (!slides || slides.length === 0) return [];
    let duplicated = [...slides];
    // If there are fewer than 10 slides, duplicate them so loop mode has enough DOM elements to shuffle
    while (duplicated.length < 10) {
      duplicated = [...duplicated, ...slides];
    }
    return duplicated;
  }, [slides]);

  // 🔹 control loading via useEffect
  useEffect(() => {
    if (slides && slides.length > 0) {
      // small timeout makes it feel fast + smooth
      const t = setTimeout(() => setLoading(false), 150);
      return () => clearTimeout(t);
    }
  }, [slides]);

  // hovered slide on top
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const onOver = (e) => {
      const slide = e.target.closest(".swiper-slide");
      if (slide) slide.classList.add("isHoveredSlide");
    };
    const onOut = (e) => {
      const slide = e.target.closest(".swiper-slide");
      if (slide) slide.classList.remove("isHoveredSlide");
    };

    wrapper.addEventListener("pointerover", onOver);
    wrapper.addEventListener("pointerout", onOut);

    return () => {
      wrapper.removeEventListener("pointerover", onOver);
      wrapper.removeEventListener("pointerout", onOut);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full pt-[6px] pb-[14px] isolate [&_.swiper]:!overflow-visible [&_.swiper-wrapper]:!overflow-visible [&_.swiper-slide]:relative [&_.swiper-slide]:z-[1] [&_.swiper-slide]:transition-transform [&_.swiper-slide]:duration-300 [&_.swiper-slide]:ease-in-out [&_.swiper-slide.isHoveredSlide]:!z-[50] [&_.swiper-slide:hover]:scale-[1.22] [&_.swiper-slide:hover]:delay-[180ms] [&_.swiper-slide:hover_.scaling-image]:scale-[1.06] [&_.swiper-slide:hover_.scaling-box]:shadow-[0_18px_45px_rgba(0,0,0,0.55)] will-change-transform">
      <Swiper
        modules={[Navigation]}
        loop={!loading}
        spaceBetween={14}
        speed={450}
        slidesPerGroup={1}
        loopAdditionalSlides={2}
        breakpoints={{
          0: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {loading
          ? skeletonSlides.map((_, i) => (
            <SwiperSlide key={`sk-${i}`}>
              <div className="block w-full">
                <div className="scaling-box h-[250px] max-[599px]:h-[200px] max-[599px]:m-auto rounded-[10px] relative overflow-hidden bg-black animate-pulse">
                  <span className="text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)]">Loading...</span>
                </div>
              </div>
            </SwiperSlide>
          ))
          : displaySlides.map((slide, i) => (
            <SwiperSlide key={i}>
              <Link href={slide.link} className="block w-full">
                <div className="scaling-box h-[250px] max-[599px]:h-[200px] max-[599px]:m-auto rounded-[10px] relative overflow-hidden bg-black transform-gpu will-change-transform">
                  <Image
                    src={slide.bg}
                    alt={slide.title || "slide image"}
                    fill
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    priority={i < 4 && !loading} // Prioritize first few images
                    quality={85}
                    className="scaling-image block object-cover object-center scale-100 transition-transform duration-300 ease-in-out transform-gpu will-change-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.55)] to-[rgba(0,0,0,0.05)] pointer-events-none z-[1]" />
                  <h4 className="absolute left-[12px] bottom-[12px] m-0 text-white !text-[14px] md:!text-[18px] lg:!text-[22px] font-bold drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)] z-[2] capitalize">{slide.title}</h4>
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>

      <button
        ref={prevRef}
        type="button"
        aria-label="Previous"
        className="absolute left-[6px] top-1/2 -translate-y-1/2 z-[60] cursor-pointer border-2 border-[#e3d3cc] rounded-full bg-[rgba(0,0,0,0.45)] text-white grid place-items-center disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={loading}
      >
        <MdOutlineArrowBackIosNew className="w-[40px] h-[40px] max-[599px]:w-[30px] max-[599px]:h-[30px] p-[8px] max-[599px]:p-[4px]" />
      </button>

      <button
        ref={nextRef}
        type="button"
        aria-label="Next"
        className="absolute right-[6px] top-1/2 -translate-y-1/2 z-[60] cursor-pointer border-2 border-[#e3d3cc] rounded-full bg-[rgba(0,0,0,0.45)] text-white grid place-items-center disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={loading}
      >
        <MdOutlineArrowForwardIos className="w-[40px] h-[40px] max-[599px]:w-[30px] max-[599px]:h-[30px] p-[8px] max-[599px]:p-[4px]" />
      </button>
    </div>
  );
};

export default AutoSlider;
