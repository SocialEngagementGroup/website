"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import styles from "./Vdo.module.css";

export default function VideoScroll({ src, poster }) {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // faster + tighter response
  const p = useSpring(scrollYProgress, { stiffness: 260, damping: 30, mass: 0.2 });

  // reach full size faster (optional): change 0.5 to 0.35 for even faster
  const width = useTransform(p, [0, 0.5], ["40vw", "100dvw"]);
  const height = useTransform(p, [0, 0.5], ["40vh", "100dvh"]);
  const radius = useTransform(p, [0, 0.5], ["20px", "0px"]);

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
          <video
            className={styles.video}
            src={src}
            poster={poster}
            loop
            muted
            autoPlay
            playsInline
          />
        </motion.div>
      </div>
    </section>
  );
}
