'use client';

import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // ⬅️ Added Autoplay
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './InnerSlider.module.css';

const InnerSlider = ({ items }) => {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!items || items.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className={`${styles.sliderContainer} ${loaded ? styles.loaded : ''}`}
    >
      <Swiper
        modules={[Pagination, Autoplay]} // ⬅️ Include Autoplay module
        spaceBetween={25}
        slidesPerView={2}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        // autoplay={{
        //   delay: 2500, // ⏱ Slide every 2.5 seconds
        //   disableOnInteraction: false, // ✅ Keeps autoplay even after user swipes
        // }}
        speed={1000} // 🌀 Smooth transition speed (1s)
        loop={true} // 🔁 Infinite loop
        className={`${styles.sliderWrapper} mySwiper`}
        breakpoints={{
          0: { slidesPerView: 1 },
                450: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {items.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className={styles.innerCard}>
              <img src={item.icon} alt={`slide-${idx}`} />
              <h4 className="mt-5">{item.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InnerSlider;
