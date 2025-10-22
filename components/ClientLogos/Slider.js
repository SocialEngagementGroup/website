"use client";
import { ClientsLogo } from "../../data";
import styles from "./Slider.module.css";

const LogoMarquee = ({ speed = 100 }) => {
  return (
    <div className="w-full pt-8 relative">
      <div className={styles["marquee-wrapper"]}>
        <div
          className={styles.marquee}
          style={{ "--marquee-speed": `${speed}s` }}
        >
          {ClientsLogo.concat(ClientsLogo).map((logo, idx) => (
            <div
              key={idx}
              className="flex justify-center items-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-full w-full"
              />
            </div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className={styles["fade-left"]}></div>
        <div className={styles["fade-right"]}></div>
      </div>
    </div>
  );
};

export default LogoMarquee;
