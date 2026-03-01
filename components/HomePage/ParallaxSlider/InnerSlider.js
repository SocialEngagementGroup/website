'use client';

import React, { useEffect, useState, useRef, useMemo } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Link from 'next/link';

const InnerSlider = ({ items }) => {
  const [loaded, setLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const totalSlides = items?.length || 1;

  // Duplicate slides once if items <= 4 to ensure enough nodes for Swiper loop
  const displaySlides = React.useMemo(() => {
    if (!items || items.length === 0) return [];
    if (items.length > 4) return items;
    return [...items, ...items];
  }, [items]);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!items || items.length === 0) return null;

  return (
    <div className={`relative w-full max-full mx-auto mt-[20px] sm:mt-[20px] xl:mt-[40px] transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={25}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
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
        speed={600}
        className="w-full mySwiper"
        breakpoints={{
          0: { slidesPerView: 1 },
          450: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          986: { slidesPerView: 2 },
          1276: { slidesPerView: 4 },
        }}
        nested={true}
        watchOverflow={false}
        watchSlidesProgress={true}
        grabCursor={true}
      >
        {displaySlides.map((item, idx) => (
          <SwiperSlide key={idx}>
            <Link href={item.link}>
              <div className="relative overflow-hidden w-full h-[340px] sm:h-[300px] xl:h-[300px] 2xl:h-[330px] flex flex-col items-start justify-end rounded-[20px] border-[5px] border-black text-white transition-[transform,opacity] duration-300 after:absolute after:inset-0 after:bg-[linear-gradient(to_top,rgba(0,0,0,0.85),rgba(0,0,0,0.35),rgba(0,0,0,0.05))] after:z-[1] after:pointer-events-none [&>*]:relative [&>*]:z-[2] will-change-transform">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  style={{ zIndex: 0 }}
                />
                <div className="w-full h-[88px] relative z-[2]">
                  <h5 className="mt-5 inner-title px-3 text-white capitalize">{item.name}</h5>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modern Navigation: Arrow + Progress Bar (Sync'd with Service Page Style) */}
      <div className="flex items-center justify-center gap-6 mt-1 sm:mt-4 w-full max-w-[400px] mx-auto">
        <button
          ref={prevRef}
          type="button"
          aria-label="Previous"
          className="w-10 h-10 flex items-center justify-center rounded-full text-white/70 hover:text-white transition-all duration-300 cursor-pointer disabled:opacity-20"
          onClick={() => {
            if (swiperRef.current) {
              swiperRef.current.autoplay.stop();
              setTimeout(() => {
                if (swiperRef.current) swiperRef.current.autoplay.start();
              }, 3000);
            }
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>

        <div className="flex-grow h-[2px] bg-white/20 relative overflow-hidden rounded-full min-w-[50px] sm:min-w-[120px]">
          <div
            className="absolute top-0 h-full bg-white/80 rounded-full transition-all duration-500 ease-out"
            style={{
              left: `${(activeIndex / totalSlides) * 100}%`,
              width: `${(1 / totalSlides) * 100}%`,
            }}
          />
        </div>

        <button
          ref={nextRef}
          type="button"
          aria-label="Next"
          className="w-10 h-10 flex items-center justify-center rounded-full text-white/70 hover:text-white transition-all duration-300 cursor-pointer disabled:opacity-20"
          onClick={() => {
            if (swiperRef.current) {
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
    </div>
  );
};

export default React.memo(InnerSlider);
