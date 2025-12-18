"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import "swiper/css";
import "swiper/css/navigation";
import styles from "./AutoSlider.module.css";

const LogoSwiper = ({ slides = [] }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperLoaded, setSwiperLoaded] = useState(false);

  useEffect(() => {
    setSwiperLoaded(true);
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* Custom Left Arrow */}
      <div 
        ref={prevRef} 
        className={`${styles.customArrow} ${styles.prevArrow}`}
      >
        <FaLongArrowAltLeft size={24} />
      </div>

      <Swiper
        key={swiperLoaded ? 'loaded' : 'loading'}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            if (swiper.params) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            }
          });
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
        }}
        className={styles.sliderWrapper}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <Link href={slide.link}>
              <div
                className={styles.cardBox}
                style={{ backgroundImage: `url(${slide.bg})` }}
              >
                <h4 className={styles.cardTitle}>{slide.title}</h4>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Right Arrow */}
      <div 
        ref={nextRef} 
        className={`${styles.customArrow} ${styles.nextArrow}`}
      >
        <FaLongArrowAltRight size={24} />
      </div>
    </div>
  );
};

export default LogoSwiper;