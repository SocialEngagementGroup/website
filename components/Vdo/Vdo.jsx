"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import styles from "./Vdo.module.css";

const easeOut = (t) => 1 - Math.pow(1 - t, 3);

const VideoParallax = ({ src }) => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [style, setStyle] = useState({});
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const vh = window.innerHeight;

    // Scroll progress
    const start = vh * (isMobile ? 0.8 : 1);
    const end = 0;
    const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
    const eased = easeOut(progress);

    // Transform & layout animation
    const scaleStart = isMobile ? 0.85 : 0.7;
    const scale = scaleStart + (1 - scaleStart) * eased;
    const translateY = (isMobile ? 30 : 50) - (isMobile ? 30 : 50) * eased;
    const opacity = 0.5 + 0.5 * eased;

    // Dynamic padding top/bottom for balance
    const paddingStart = isMobile ? 80 : 120; // px
    const paddingEnd = 0;
    const dynamicPadding = paddingStart - (paddingStart - paddingEnd) * eased;

    setStyle({
      transform: `translateY(${translateY}%) scale(${scale})`,
      opacity,
      paddingTop: `${dynamicPadding}px`,
      paddingBottom: `${dynamicPadding}px`,
    });
  }, [isMobile]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    isPlaying ? videoRef.current.pause() : videoRef.current.play();
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section ref={sectionRef} className={styles.wrapper}>
      <div className={styles.videoContainer}>
        <div className={styles.videoBox} style={style}>
          <video
            ref={videoRef}
            className={styles.video}
            loop
            autoPlay
            muted
            playsInline
            onClick={togglePlay}
          >
            <source src={src} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoParallax;
