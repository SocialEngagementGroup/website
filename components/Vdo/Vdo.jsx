"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import styles from "./Vdo.module.css";

const easeOut = (t) => 1 - Math.pow(1 - t, 3);

const VideoParallax = ({ src }) => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [videoStyle, setVideoStyle] = useState({});
  const [isPlaying, setIsPlaying] = useState(true);

  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;

    const sectionTop = sectionRef.current.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    // Map scroll progress: section entering viewport -> full top
    const startOffset = viewportHeight; // start animation
    const endOffset = 0; // finish animation at top
    const progress = Math.min(1, Math.max(0, (startOffset - sectionTop) / (startOffset - endOffset)));
    const eased = easeOut(progress);

    // Smoothly interpolate scale, translateY, and width
    const scale = 0.64 + (1 - 0.64) * eased;   // scale 0.64 -> 1
    const translateY = 50 - 50 * eased;        // translateY 50% -> 0%
    const width = 64 + (100 - 64) * eased;     // width 64% -> 100%

    setVideoStyle({
      transform: `translateY(${translateY}%) scale(${scale})`,
      width: `${width}%`,
      transformOrigin: "center center",
      transition: "transform 0.05s linear, width 0.05s linear",
      willChange: "transform, width",
    });
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    try {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    } catch (err) {
      console.error("Video play error:", err);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initialize on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section ref={sectionRef} className={styles.wrapper}>
      <div className={styles.videoContainer}>
        <div className={styles.videoBox} style={videoStyle}>
          <video
            ref={videoRef}
            loop
            playsInline
            autoPlay
            muted
            className={styles.video}
            onClick={togglePlay}
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
