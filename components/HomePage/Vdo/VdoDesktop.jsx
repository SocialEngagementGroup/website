"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import styles from "./Vdo.module.css";

export default function VdoDesktop() {
  const sectionRef = useRef(null);
  const [armed, setArmed] = useState(false);     // near viewport
  const [loadIframe, setLoadIframe] = useState(false); // user clicked play

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setArmed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setArmed(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const springCfg = { stiffness: 260, damping: 30, mass: 0.2 };
  const p = useSpring(scrollYProgress, springCfg);
  const width = useTransform(p, [0, 0.5], ["40vw", "100dvw"]);
  const height = useTransform(p, [0, 0.5], ["40vh", "100dvh"]);

  return (
    <section ref={sectionRef} className={styles.wrapper}>
      <div className={styles.stickyStage}>
        <motion.div className={styles.videoShell} style={{ width, height, maxWidth: "100dvw", maxHeight: "100dvh" }}>
          {!loadIframe ? (
            <button
              type="button"
              className={styles.posterBtn}
              onClick={() => setLoadIframe(true)}
              disabled={!armed}
              aria-label="Play video"
            >
              <Image
                src="/images/video-poster.webp"
                alt="Video preview"
                fill
                priority={false}
                sizes="(max-width: 1200px) 100vw, 60vw"
                className={styles.posterImg}
              />
              <span className={styles.playBadge}>{armed ? "Play" : "Loading..."}</span>
            </button>
          ) : (
            <iframe
              className={styles.video}
              loading="lazy"
              fetchpriority="low"
              src="https://www.youtube-nocookie.com/embed/MoGoOZzYXSc?mute=1&loop=1&playlist=MoGoOZzYXSc&controls=1&modestbranding=1&rel=0"
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}