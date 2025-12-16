"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // fixed import
import "swiper/css";
import "swiper/css/navigation";
import styles from "./AutoSlider.module.css";

const LogoSwiper = ({ slides = [] }) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20} /* you can reduce it to 15 or 10 if needed */
        slidesPerView={4}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
        }}
        className={`${styles.sliderWrapper} mySwiperSlider`} // Optional custom classes
        
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
    </div>
  );
};

export default LogoSwiper;
