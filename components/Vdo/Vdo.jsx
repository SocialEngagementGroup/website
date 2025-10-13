"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";

const easeOut = (t) => 1 - Math.pow(1 - t, 3); // smooth easing curve

const VideoParallax = ({ src }) => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [videoStyle, setVideoStyle] = useState({});
  const [isSticky, setIsSticky] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;

    const sectionTop = sectionRef.current.getBoundingClientRect().top;
    const sectionHeight = sectionRef.current.offsetHeight;
    const viewportHeight = window.innerHeight;

    const startZoomOffset = viewportHeight * 0.8;
    const endZoomOffset = viewportHeight * 0.2;

    let scale = 0.64;
    let translateY = 50; // %
    let width = 64; // %

    // PHASE 1: Zoom & rise
    if (sectionTop < startZoomOffset && sectionTop > endZoomOffset) {
      const progress =
        1 - (sectionTop - endZoomOffset) / (startZoomOffset - endZoomOffset);
      const eased = easeOut(progress);
      scale = 0.64 + (0.9 - 0.64) * eased;
      translateY = 50 - 50 * eased;
      width = 64 + (70 - 64) * eased;
      setIsSticky(false);
    }

    // PHASE 2: Sticky & expand
    else if (sectionTop <= endZoomOffset && sectionTop > -sectionHeight + viewportHeight) {
      setIsSticky(true);
      const stickyProgress = Math.min(
        1,
        Math.max(0, (endZoomOffset - sectionTop) / viewportHeight)
      );
      const eased = easeOut(stickyProgress);
      scale = 0.9 + (1 - 0.9) * eased;
      translateY = 0 - 10 * eased;
      width = 70 + (100 - 70) * eased;
    }

    // PHASE 3: After section passed
    else if (sectionTop <= -sectionHeight + viewportHeight) {
      setIsSticky(false);
      scale = 1;
      translateY = 0;
      width = 100;
    }

    setVideoStyle({
      transform: `translateY(${translateY}%) scale(${scale})`,
      width: `${width}%`,
      transition: "transform 0.05s ease-out, width 0.05s ease-out",
      willChange: "transform, width",
    });
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    try {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } catch (err) {
      console.error("Video play error:", err);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden flex items-center justify-center"
     
    >
      <div
        className={`absolute inset-0 flex items-center justify-center ${
          isSticky
            ? "fixed top-0 left-0 w-full h-screen"
            : "relative w-full h-full"
        }`}
      >
        <div
          className="relative h-[50vh] w-[60vw] md:h-[70vh] md:w-[70vw] lg:h-[80vh] lg:w-[80vw] bg-amber-700 rounded-2xl overflow-hidden"
          style={{ ...videoStyle, transformOrigin: "center center" }}
        >
       <video
  ref={videoRef}
  loop

  playsInline
  autoPlay
  className="w-full h-full object-cover"
>
  <source src={src} type="video/mp4" />
  Your browser does not support the video tag.
</video>
        </div>
      </div>

  
    </section>
  );
};

export default VideoParallax;
