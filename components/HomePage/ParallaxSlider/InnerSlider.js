'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
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
      className={`relative w-full max-w-full mx-auto mt-[10px] sm:mt-[20px] xl:mt-[40px] transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Custom Previous Arrow */}
      <div ref={prevRef} className={`absolute top-[48%] -translate-y-1/2 z-[60] cursor-pointer text-[#e3d3cc] hover:text-black border-2 border-[#e3d3cc] rounded-full bg-black/45 hover:bg-[#f0f0f0] flex place-items-center transition-colors duration-300 left-0 md:-left-[46px]`}>
        <MdOutlineArrowBackIosNew className="w-[30px] h-[30px] p-[4px] sm:w-[40px] sm:h-[40px] sm:p-[8px]" />
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
        className={`w-full mySwiper`}
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
              <div className="relative overflow-hidden w-full h-[320px] sm:h-[300px] xl:h-[350px] 2xl:h-[382px] flex flex-col items-start justify-end rounded-[20px] border-[5px] border-black text-white transition-all duration-300 after:absolute after:inset-0 after:bg-[linear-gradient(to_top,rgba(0,0,0,0.85),rgba(0,0,0,0.35),rgba(0,0,0,0.05))] after:z-[1] after:pointer-events-none [&>*]:relative [&>*]:z-[2]">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 90vw, (max-width: 1276px) 45vw, 25vw"
                  className="object-cover"
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

      {/* Custom Next Arrow */}
      <div ref={nextRef} className={`absolute top-[48%] -translate-y-1/2 z-[60] cursor-pointer text-[#e3d3cc] hover:text-black border-2 border-[#e3d3cc] rounded-full bg-black/45 hover:bg-[#f0f0f0] flex place-items-center transition-colors duration-300 right-0 md:-right-[46px]`}>
        <MdOutlineArrowForwardIos className="w-[30px] h-[30px] p-[4px] sm:w-[40px] sm:h-[40px] sm:p-[8px]" />
      </div>
    </div>
  );
};

export default InnerSlider;
