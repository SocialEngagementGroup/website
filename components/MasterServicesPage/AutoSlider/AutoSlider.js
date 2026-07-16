"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

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
    <div ref={wrapperRef} className="relative w-full pt-[6px] pb-[14px] overflow-hidden md:overflow-visible isolate md:[&_.swiper]:!overflow-visible md:[&_.swiper-wrapper]:!overflow-visible [&_.swiper-slide]:relative [&_.swiper-slide]:z-[1] [&_.swiper-slide]:transition-all [&_.swiper-slide]:duration-300 [&_.swiper-slide]:ease-in-out md:[&_.swiper-slide.isHoveredSlide]:!z-[50] group/wrapper">
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={!loading}
        spaceBetween={14}
        speed={600}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
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
                <div className="scaling-box h-[250px] max-[599px]:h-auto max-[599px]:aspect-[1.5/1] max-[599px]:m-auto rounded-2xl relative overflow-hidden bg-black animate-pulse">
                  <span className="text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)]">Loading...</span>
                </div>
              </div>
            </SwiperSlide>
          ))
          : displaySlides.map((slide, i) => (
            <SwiperSlide key={i}>
              <Link
                href={slide.link}
                className="block w-full group/slide h-[250px] max-[599px]:h-auto max-[599px]:aspect-[1.5/1] max-[599px]:m-auto mt-6 md:mt-12 transition-all duration-300 md:hover:scale-[1.12] md:hover:z-[50] relative overflow-hidden rounded-2xl"
              >
                <div className="scaling-box h-full w-full relative overflow-hidden bg-black transform-gpu will-change-transform border-0 outline-none">
                  <Image
                    src={slide.bg}
                    alt={
                      slide.title
                        ? `${slide.title} — SEG service`
                        : "SEG service preview"
                    }
                    fill
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    priority={i < 4 && !loading}
                    quality={85}
                    className="scaling-image block object-cover object-center scale-[1.02] opacity-90 transition-all duration-500 ease-out transform-gpu will-change-transform md:group-hover/slide:scale-[1.08] md:group-hover/slide:opacity-100"
                  />
                  
                  {/* Minimal Bottom Gradient Shadow - Slight Increase */}
                  <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none z-[1]" />
                  
                  {/* Polished Text with Heavy Shadow */}
                  <h4 
                    className="absolute left-4 bottom-4 lg:left-6 lg:bottom-6 m-0 text-white !text-[16px] md:!text-[20px] lg:!text-[24px] font-heading font-medium tracking-wide z-[2] capitalize transition-all duration-300 ease-out block md:group-hover/slide:-translate-y-1"
                    style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,1)' }}
                  >
                    {slide.title}
                  </h4>
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* Mobile Navigation: Arrow + Progress Bar (Subtle) */}
      <div className="flex md:hidden items-center gap-4 mt-6 w-full max-w-[260px] mx-auto">
        <button
          type="button"
          aria-label="Previous"
          className="text-white/70 hover:text-white transition-colors cursor-pointer disabled:opacity-10"
          disabled={loading}
          onClick={() => {
            if (swiperRef.current) {
              swiperRef.current.slidePrev();
              swiperRef.current.autoplay.stop();
              setTimeout(() => {
                if (swiperRef.current) swiperRef.current.autoplay.start();
              }, 3000);
            }
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>

        <div className="flex-grow h-[2px] bg-white/20 relative overflow-hidden rounded-full">
          <div
            className="absolute top-0 h-full bg-white/80 rounded-full transition-all duration-300 ease-out"
            style={{
              left: `${(activeIndex / totalSlides) * 100}%`,
              width: `${(1 / totalSlides) * 100}%`,
            }}
          />
        </div>

        <button
          type="button"
          aria-label="Next"
          className="text-white/70 hover:text-white transition-colors cursor-pointer disabled:opacity-10"
          disabled={loading}
          onClick={() => {
            if (swiperRef.current) {
              swiperRef.current.slideNext();
              swiperRef.current.autoplay.stop();
              setTimeout(() => {
                if (swiperRef.current) swiperRef.current.autoplay.start();
              }, 3000);
            }
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>

      {/* Desktop Navigation: Overlay arrows (Modern Transparent Brown Glass Style) */}
      <button
        ref={prevRef}
        type="button"
        aria-label="Previous"
        className="hidden md:flex absolute -left-[27px] top-[calc(50%+15px)] -translate-y-1/2 z-[60] w-[54px] h-[54px] cursor-pointer rounded-full bg-[#7A4B4B]/80 backdrop-blur-md text-white shadow-[0_4px_20px_rgba(0,0,0,0.3)] items-center justify-center disabled:opacity-0 disabled:scale-95 group/arrow hover:scale-110 hover:bg-[#8B5A5A] hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300 border border-white/10"
        disabled={loading}
        onClick={() => {
          if (swiperRef.current) {
            swiperRef.current.autoplay.stop();
            setTimeout(() => {
              if (swiperRef.current) swiperRef.current.autoplay.start();
            }, 3000);
          }
        }}
      >
        <svg fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-6 h-6 mr-0.5 transition-transform duration-300 group-hover/arrow:-translate-x-1"><path d="m15 18-6-6 6-6"/></svg>
      </button>

      <button
        ref={nextRef}
        type="button"
        aria-label="Next"
        className="hidden md:flex absolute -right-[27px] top-[calc(50%+15px)] -translate-y-1/2 z-[60] w-[54px] h-[54px] cursor-pointer rounded-full bg-[#7A4B4B]/80 backdrop-blur-md text-white shadow-[0_4px_20px_rgba(0,0,0,0.3)] items-center justify-center disabled:opacity-0 disabled:scale-95 group/arrow hover:scale-110 hover:bg-[#8B5A5A] hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300 border border-white/10"
        disabled={loading}
        onClick={() => {
          if (swiperRef.current) {
            swiperRef.current.autoplay.stop();
            setTimeout(() => {
              if (swiperRef.current) swiperRef.current.autoplay.start();
            }, 3000);
          }
        }}
      >
        <svg fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-6 h-6 ml-0.5 transition-transform duration-300 group-hover/arrow:translate-x-1"><path d="m9 18 6-6-6-6"/></svg>
      </button>
    </div>
  );
};

export default AutoSlider;
