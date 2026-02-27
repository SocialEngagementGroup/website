"use client";

import { useRef, useState, useEffect } from "react";
import styles from "./Vdo.module.css";

export default function VdoMobile() {
    const sectionRef = useRef(null);
    const [loadIframe, setLoadIframe] = useState(false);

    // Gate YouTube iframe until the section is near the viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setLoadIframe(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "200px" }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className={styles.mobileWrapper}>
            <div className={styles.mobileVideoShell}>
                {loadIframe && (
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
                )}
            </div>
        </section>
    );
}

