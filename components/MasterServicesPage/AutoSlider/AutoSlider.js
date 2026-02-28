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
  const swiperRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSlides = slides.length || 1;

  // skeleton placeholders
  const skeletonSlides = useMemo(() => Array.from({ length: 8 }), []);

  // Ensure enough slides for seamless infinite loop (max slidesPerView is 4, so we need > 4)
  const displaySlides = useMemo(() => {
    if (!slides || slides.length === 0) return [];
    let duplicated = [...slides];
    while (duplicated.length < 10) {
      duplicated = [...duplicated, ...slides];
    }
    return duplicated;
  }, [slides]);

  // 🔹 control loading via useEffect
  useEffect(() => {
    if (slides && slides.length > 0) {
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
    <div ref={wrapperRef} className="relative w-full pt-[6px] pb-[14px] overflow-hidden md:overflow-visible isolate md:[&_.swiper]:!overflow-visible md:[&_.swiper-wrapper]:!overflow-visible [&_.swiper-slide]:relative [&_.swiper-slide]:z-[1] [&_.swiper-slide]:transition-transform [&_.swiper-slide]:duration-300 [&_.swiper-slide]:ease-in-out md:[&_.swiper-slide.isHoveredSlide]:!z-[50] md:[&_.swiper-slide:hover]:scale-[1.22] md:[&_.swiper-slide:hover]:delay-[180ms] md:[&_.swiper-slide:hover_.scaling-image]:scale-[1.06] md:[&_.swiper-slide:hover_.scaling-box]:shadow-[0_18px_45px_rgba(0,0,0,0.55)] will-change-transform">
      <Swiper
        modules={[Navigation]}
        loop={!loading}
        spaceBetween={14}
        speed={450}
        slidesPerGroup={1}
        loopAdditionalSlides={2}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 12 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiperRef.current = swiper;
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex % totalSlides);
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
                    priority={i < 4 && !loading}
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

      {/* Mobile Navigation: Arrow + Progress Bar (Testimonials style) */}
      <div className="flex md:hidden items-center gap-4 mt-4 w-full max-w-[260px] mx-auto">
        <button
          type="button"
          aria-label="Previous"
          className="text-white/40 hover:text-white transition-colors cursor-pointer disabled:opacity-30"
          disabled={loading}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        </button>

        <div className="flex-grow h-[2px] bg-white/20 relative overflow-hidden rounded-full">
          <div
            className="absolute top-0 h-full bg-white rounded-full transition-all duration-300 ease-out"
            style={{
              left: `${(activeIndex / totalSlides) * 100}%`,
              width: `${(1 / totalSlides) * 100}%`,
            }}
          />
        </div>

        <button
          type="button"
          aria-label="Next"
          className="text-white/40 hover:text-white transition-colors cursor-pointer disabled:opacity-30"
          disabled={loading}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </div>

      {/* Desktop Navigation: Overlay arrows */}
      <button
        ref={prevRef}
        type="button"
        aria-label="Previous"
        className="hidden md:grid absolute left-[6px] top-1/2 -translate-y-1/2 z-[60] cursor-pointer border-2 border-[#e3d3cc] rounded-full bg-[rgba(0,0,0,0.45)] text-white place-items-center disabled:opacity-50 disabled:cursor-not-allowed group hover:bg-white/20 transition-all"
        disabled={loading}
      >
        <MdOutlineArrowBackIosNew className="w-[40px] h-[40px] p-[10px]" />
      </button>

      <button
        ref={nextRef}
        type="button"
        aria-label="Next"
        className="hidden md:grid absolute right-[6px] top-1/2 -translate-y-1/2 z-[60] cursor-pointer border-2 border-[#e3d3cc] rounded-full bg-[rgba(0,0,0,0.45)] text-white place-items-center disabled:opacity-50 disabled:cursor-not-allowed group hover:bg-white/20 transition-all"
        disabled={loading}
      >
        <MdOutlineArrowForwardIos className="w-[40px] h-[40px] p-[10px]" />
      </button>
    </div>
  );
};

export default AutoSlider;
