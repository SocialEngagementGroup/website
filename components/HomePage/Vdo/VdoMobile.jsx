"use client";

import React from "react";
import styles from "./Vdo.module.css";

export default function VdoMobile() {
    return (
        <section className={styles.mobileWrapper}>
            <div className={styles.mobileVideoShell}>
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
            </div>
        </section>
    );
}