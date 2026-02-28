"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import styles from "./Vdo.module.css";

export default function VdoDesktop() {
  const sectionRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Defaults ( > 1200px )
  let springCfg = { stiffness: 260, damping: 30, mass: 0.2 };
  let range = [0, 0.5];
  let wVals = ["40vw", "100dvw"];
  let hVals = ["40vh", "100dvh"];

  // Note: We don't strictly need the 'screen' check here if we only render this on desktop,
  // but it's okay to keep these for finer desktop adjustments if needed.
  // Actually, let's keep it simple for now.

  // responsive motion values
  const p = useSpring(scrollYProgress, springCfg);
  const width = useTransform(p, range, wVals);
  const height = useTransform(p, range, hVals);

  return (
    <section ref={sectionRef} className={styles.wrapper}>
      <div className={styles.stickyStage}>
        <motion.div
          className={styles.videoShell}
          style={{
            width,
            height,
            maxWidth: "100dvw",
            maxHeight: "100dvh",
          }}
        >
          <iframe
            className={`${styles.video} absolute inset-0 w-full h-full transform scale-[1.01] transition-all duration-700`}
            src={`https://www.youtube.com/embed/ujt54JDgbYo?rel=0&modestbranding=1&enablejsapi=1&controls=0&iv_load_policy=3&loop=1&playlist=ujt54JDgbYo&playsinline=1${isPlaying ? '&autoplay=1' : ''}`}
            title="Social Engagement Group | Grow With Us"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
          {!isPlaying && (
            <div
              className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer z-10"
              onClick={() => setIsPlaying(true)}
            >
              <button
                className="w-20 h-20 rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-lg"
                style={{ backgroundColor: '#975554' }}
                aria-label="Play Video"
              >
                <svg className="w-10 h-10 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}