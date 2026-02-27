'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './InnerSlider.module.css';
import Link from 'next/link';

const InnerSlider = ({ items }) => {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef(null);
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
      {/* Custom Previous Arrow */}
      <div ref={prevRef} className={`${styles.swiperButtonPrev} ${styles.customArrow}`}>
        <MdOutlineArrowBackIosNew className={styles.arrowIcon} />
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={25}
        slidesPerView={2}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          if (prevRef.current && nextRef.current) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        speed={600}
        className={`${styles.sliderWrapper} mySwiper`}
        breakpoints={{
          0: { slidesPerView: 1 },
          450: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          986: { slidesPerView: 2 },
          1276: { slidesPerView: 4 },
        }}
      >
        {items.map((item, idx) => (
          <SwiperSlide key={idx}>
            <Link href={item.link}>
              {/*
                Replaced CSS background-image with next/image for full Next.js optimization
                (WebP conversion, srcset, lazy loading). The card layout is preserved:
                - next/image fills the card at z-index:0
                - .innerCard children retain z-index:2 (from module CSS) so text floats above
              */}
              <div className={styles.innerCard} style={{ position: 'relative', overflow: 'hidden' }}>
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 90vw, (max-width: 1276px) 45vw, 25vw"
                  className="object-cover"
                  style={{ zIndex: 0 }}
                />
                <div className={styles.slideTitle}>
                  <h5 className="mt-5 inner-title px-3">{item.name}</h5>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Next Arrow */}
      <div ref={nextRef} className={`${styles.swiperButtonNext} ${styles.customArrow}`}>
        <MdOutlineArrowForwardIos className={styles.arrowIcon} />
      </div>
    </div>
  );
};

export default InnerSlider;
