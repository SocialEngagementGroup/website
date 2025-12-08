"use client";
import React, { useRef, useEffect } from "react";
import styles from "./Vdo.module.css";

const easeOut = (t) => 1 - Math.pow(1 - t, 3);

const VideoScroll = ({ src, poster }) => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !videoRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // progress: 0 = section bottom at bottom of viewport, 1 = section top at top of viewport
      let progress = 1 - (rect.top + rect.height) / (vh + rect.height);
      progress = Math.min(1, Math.max(0, progress)); // clamp 0 -> 1
      const eased = easeOut(progress);

      // Scale from 0.5 -> 1
      const scale = 0.5 + 0.5 * eased;
      // Translate Y from initial -50% -> 0%
      const translateY = -50 + 50 * eased;

      videoRef.current.style.transform = `translateY(${translateY}%) perspective(1200px) scale(${scale})`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initialize
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className={styles.wrapper}>
      <div className={styles.videoWrapper}>
        <video
          ref={videoRef}
          className={styles.video}
          src={src}
          poster={poster}
          loop
          muted
          autoPlay
          playsInline
        />
      </div>
    </section>
  );
};

export default VideoScroll;
