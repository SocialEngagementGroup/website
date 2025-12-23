"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import styles from "./Vdo.module.css";

function useScreenWidth() {
  const [w, setW] = useState(0);

  useEffect(() => {
    const update = () => setW(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return w;
}

export default function VideoScroll({ src }) {
  const sectionRef = useRef(null);
  const screen = useScreenWidth();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Defaults ( > 1200px )
  let springCfg = { stiffness: 260, damping: 100, mass: 0.2 };
  let range = [0, 0.1];
  let wVals = ["40vw", "100dvw"];
  let hVals = ["40vh", "100dvh"];

  // <= 1200px
  if (screen <= 1200) {
    springCfg = { stiffness: 240, damping: 32, mass: 0.25 };
    range = [0, 0.20];
    wVals = ["50vw", "100dvw"];
    hVals = ["45vh", "100dvh"];
  }

  // <= 999px
  if (screen <= 999) {
    springCfg = { stiffness: 220, damping: 34, mass: 0.3 };
    range = [0, 0.4];
    wVals = ["65vw", "100dvw"];
    hVals = ["45vh", "100dvh"];
  }

  // <= 767px
  if (screen <= 767) {
    springCfg = { stiffness: 200, damping: 36, mass: 0.35 };
    range = [0, 0.35];
    wVals = ["85vw", "100dvw"];
    hVals = ["50vh", "100dvh"];
  }

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
          <video className={styles.video} src={src} loop muted autoPlay playsInline />
        </motion.div>
      </div>
    </section>
  );
}
