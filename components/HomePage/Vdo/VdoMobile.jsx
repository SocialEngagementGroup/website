"use client";

import React, { useState } from "react";
import styles from "./Vdo.module.css";

export default function VdoMobile() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className={styles.mobileWrapper}>
            <div className={`${styles.mobileVideoShell} relative`}>
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
                            className="w-16 h-16 rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-lg"
                            style={{ backgroundColor: '#975554' }}
                            aria-label="Play Video"
                        >
                            <svg className="w-8 h-8 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}