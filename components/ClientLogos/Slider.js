"use client";
import { ClientsLogo } from "../../data";
import styles from "./Slider.module.css";

const LogoMarquee = ({ speed = 100 }) => {
  return (
    <div className="w-full pt-12 md:pt-4 pb:7 md:pb-12 relative">

      {/* ✅ Main marquee wrapper */}
      <div className={styles["marquee-wrapper"]}>

        {/* ✅ Moving marquee container (speed controlled via CSS variable) */}
        <div
          className={styles.marquee}
          style={{ "--marquee-speed": `${speed}s` }}
        >
          {/* ✅ Duplicate array to create seamless infinite loop */}
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

        {/* ✅ Left & right fade gradients for smooth edge fade effect */}
        <div className={styles["fade-left"]}></div>
        <div className={styles["fade-right"]}></div>

      </div>
    </div>
  );
};

export default LogoMarquee;
