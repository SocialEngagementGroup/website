"use client";

import React from "react";
import styles from "./Vdo.module.css";

export default function VdoMobile() {
    return (
        <section className={styles.mobileWrapper}>
            <div className={styles.mobileVideoShell}>
                <iframe
                    className={styles.video}
                    src="https://www.youtube.com/embed/MoGoOZzYXSc?si=No01SSJ5FGOhnwwC&autoplay=1&mute=1"
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
