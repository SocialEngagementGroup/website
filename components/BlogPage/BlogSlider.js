"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import BlogCard from "./BlogCard";

/**
 * BlogSlider Component
 *
 * Auto-advancing carousel of blog cards used for blog showcases across the
 * site (Keep Reading, home page, service pages). Works on mobile (swipe) and
 * desktop (autoplay + arrows). Uses a modern progress-line indicator instead
 * of dots. Falls back to a static grid when there are too few posts to scroll.
 */
const BlogSlider = ({ posts = [] }) => {
  const swiperRef = useRef(null);

  if (!posts.length) return null;

  // Not enough to scroll on desktop → render a simple grid instead
  if (posts.length <= 3) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    );
  }

  return (
    <div className="relative blog-slider">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop
        spaceBetween={32}
        speed={600}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 32 },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="!pb-10"
      >
        {posts.map((post) => (
          <SwiperSlide key={post.id} className="h-auto">
            <BlogCard post={post} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Desktop arrows — sit well outside the cards so they never overlap */}
      <button
        type="button"
        aria-label="Previous"
        onClick={() => swiperRef.current?.slidePrev()}
        className="hidden xl:flex absolute -left-16 top-[44%] -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-white border border-gray-200 text-gray-700 shadow-md hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => swiperRef.current?.slideNext()}
        className="hidden xl:flex absolute -right-16 top-[44%] -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-white border border-gray-200 text-gray-700 shadow-md hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all cursor-pointer"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <style jsx global>{`
        /* Centered short-line pagination (one segment per slide); the active
           segment is highlighted and moves as you scroll — like dots, but lines. */
        .blog-slider {
          --swiper-pagination-color: #975554;
          --swiper-pagination-bullet-inactive-color: #975554;
          --swiper-pagination-bullet-inactive-opacity: 0.25;
          --swiper-pagination-bullet-width: 18px;
          --swiper-pagination-bullet-height: 3px;
          --swiper-pagination-bullet-horizontal-gap: 4px;
        }
        .blog-slider .swiper-pagination {
          bottom: 0;
        }
        .blog-slider .swiper-pagination-bullet {
          border-radius: 9999px;
          transition: width 0.3s ease, opacity 0.3s ease;
        }
        .blog-slider .swiper-pagination-bullet-active {
          width: 28px;
        }
        .blog-slider .swiper-slide {
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default BlogSlider;
