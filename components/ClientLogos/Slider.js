"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { ClientsLogo } from "../../data";

const LogoSlider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // mark as mounted after first render
  }, []);

  if (!mounted) return null; // prevent initial jump

  return (
    <div className="w-full py-8">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={8}
        spaceBetween={5} // slight visual gap
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={3000}
        breakpoints={{
          0: { slidesPerView: 3, spaceBetween: 10 },
          640: { slidesPerView: 5, spaceBetween: 10 },
          1024: { slidesPerView: 8, spaceBetween: 5 },
        }}
        className="logo-swiper"
      >
        {ClientsLogo.map((logo, idx) => (
          <SwiperSlide key={idx} className="flex justify-center items-center">
            <div className="aspect-[1/1] flex justify-center items-center bg-[#e7d9d3] rounded-lg p-2 m-1">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-full w-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoSlider;
