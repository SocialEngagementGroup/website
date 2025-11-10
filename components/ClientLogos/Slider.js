"use client";
import { Import } from "lucide-react";
import { ClientsLogo } from "../../data";
import styles from "./Slider.module.css";
import Image from "next/image";
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
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}   // specify number in pixels
                height={70}   // specify number in pixels
                className="object-contain"
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
