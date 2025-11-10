'use client';

import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'; // Import custom arrow icons
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Required for Swiper functionality
import styles from './InnerSlider.module.css';
import Image from 'next/image';

const InnerSlider = ({ items }) => {
  // State to handle fade-in or animation after component loads
  const [loaded, setLoaded] = useState(false);

  // Reference to slider container
  const containerRef = useRef(null);

  // References for custom navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Set loaded to true after component mounts (for animation/CSS)
  useEffect(() => {
    setLoaded(true);
  }, []);

  // Return null if there are no items to display
  if (!items || items.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className={`${styles.sliderContainer} ${loaded ? styles.loaded : ''}`} // Add loaded class after mount
    >
      {/* Custom Previous Arrow */}
      <div ref={prevRef} className={`${styles.swiperButtonPrev} ${styles.customArrow}`}>
        <FaLongArrowAltLeft size={24} />
      </div>

      {/* Swiper Component */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Enable required Swiper modules
        spaceBetween={25} // Space between slides
        slidesPerView={2} // Default slides per view
        pagination={{
          clickable: true,
          dynamicBullets: true, // Adds dynamic bullet navigation
        }}
        navigation={{
          prevEl: prevRef.current, // Assign custom previous button
          nextEl: nextRef.current, // Assign custom next button
        }}
        // Link the custom buttons to Swiper after initialization
        onInit={(swiper) => {
          if (prevRef.current && nextRef.current) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();   // Initialize navigation
            swiper.navigation.update(); // Update navigation
          }
        }}
        autoplay={{
          delay: 2500,              // Autoplay delay
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        speed={1000}  // Slide transition speed
        loop={true}   // Enable infinite loop
        className={`${styles.sliderWrapper} mySwiper`} // Optional custom classes
        breakpoints={{
          0: { slidesPerView: 1 },    // Mobile
          450: { slidesPerView: 1 },
          768: { slidesPerView: 2 },  // Tablet
          986: { slidesPerView: 2 },
          1276: { slidesPerView: 4 }, // Desktop
        }}
      >
        {/* Map through items and render each slide */}
        {items.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className={styles.innerCard}>
              {/* Slide image */}
              <Image width={130} height={100} src={item.icon} alt={`slide-${idx}`} />
              {/* Slide title */}
              <h5 className="mt-5 inner-title">{item.name}</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Next Arrow */}
      <div ref={nextRef} className={`${styles.swiperButtonNext} ${styles.customArrow}`}>
        <FaLongArrowAltRight size={24} />
      </div>
    </div>
  );
};

export default InnerSlider;
