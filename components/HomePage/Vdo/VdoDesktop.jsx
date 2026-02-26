"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import styles from "./Vdo.module.css";

export default function VdoDesktop() {
    const sectionRef = useRef(null);

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
                        className={styles.video}
                        src="https://www.youtube-nocookie.com/embed/MoGoOZzYXSc?si=6_22nGb-opjl1z4W&autoplay=1&mute=1&loop=1&playlist=MoGoOZzYXSc&controls=0&modestbranding=1&rel=0"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        style={{
                            width: "100%",
                            height: "100%",
                            border: "none",
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
}
