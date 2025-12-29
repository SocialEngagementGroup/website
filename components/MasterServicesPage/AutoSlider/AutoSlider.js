"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./AutoSlider.module.css";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";

const AutoSlider = ({ slides = [] }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const wrapperRef = useRef(null);

  const [loading, setLoading] = useState(true);

  // skeleton placeholders
  const skeletonSlides = useMemo(() => Array.from({ length: 8 }), []);

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
    <div ref={wrapperRef} className={styles.wrapper}>
      <Swiper
        modules={[Navigation]}
        loop={!loading}
        spaceBetween={14}
        speed={450}
        slidesPerGroup={1}
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
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        className={styles.slider}
      >
        {loading
          ? skeletonSlides.map((_, i) => (
              <SwiperSlide key={`sk-${i}`}>
                <div className={styles.cardLink}>
                  <div className={`${styles.cardBox} ${styles.skeletonCard}`}>
                    <span className={styles.skeletonText}>Loading...</span>
                  </div>
                </div>
              </SwiperSlide>
            ))
          : slides.map((slide, i) => (
              <SwiperSlide key={i}>
                <Link href={slide.link} className={styles.cardLink}>
                 <div className={styles.cardBox}>
  <img
    src={slide.bg}
    alt={slide.title || "slide image"}
    className={styles.cardImage}
    loading="lazy"
  />
  <div className={styles.overlay} />
  <h4 className={styles.cardTitle}>{slide.title}</h4>
</div>
                </Link>
              </SwiperSlide>
            ))}
      </Swiper>

      <button
        ref={prevRef}
        type="button"
        aria-label="Previous"
        className={styles.prev}
        disabled={loading}
      >
        <MdOutlineArrowBackIosNew size={34} />
      </button>

      <button
        ref={nextRef}
        type="button"
        aria-label="Next"
        className={styles.next}
        disabled={loading}
      >
        <MdOutlineArrowForwardIos size={34} />
      </button>
    </div>
  );
};

export default AutoSlider;
