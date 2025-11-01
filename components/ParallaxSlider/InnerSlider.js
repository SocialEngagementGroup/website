'use client';

import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { FaLongArrowAltLeft , FaLongArrowAltRight } from 'react-icons/fa'; // ⬅️ NEW: Import Custom Icons
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Keep this, even though we use custom buttons, in case we revert or for other swiper uses
import styles from './InnerSlider.module.css';

const InnerSlider = ({ items }) => {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef(null);
  // ⬅️ NEW: Refs for the custom navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!items || items.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className={`${styles.sliderContainer} ${loaded ? styles.loaded : ''}`}
    >
      {/* ⬅️ NEW: Custom Previous Button */}
      {/* These will be positioned via CSS in InnerSlider.module.css */}
      <div ref={prevRef} className={`${styles.swiperButtonPrev} ${styles.customArrow}`}>
          <FaLongArrowAltLeft size={24} /> 
      </div>
      
      <Swiper
        // 1. Include Navigation module
        modules={[Navigation, Pagination, Autoplay]} 
        spaceBetween={25}
        slidesPerView={2}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        // 2. Set navigation to use our custom refs
        navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
        }}
        // 3. This crucial step links the custom buttons (rendered outside Swiper) 
        //    to the Swiper instance *after* it initializes.
        onInit={(swiper) => {
            // Check if the refs are current before assigning
            if (prevRef.current && nextRef.current) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
            }
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        className={`${styles.sliderWrapper} mySwiper`}
        breakpoints={{
          0: { slidesPerView: 1 },
          450: { slidesPerView: 1 },
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
      
      {/* ⬅️ NEW: Custom Next Button */}
      <div ref={nextRef} className={`${styles.swiperButtonNext} ${styles.customArrow}`}>
          <FaLongArrowAltRight size={24} />
      </div>
    </div>
  );
};

export default InnerSlider;