import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./herosection.module.css";

const HeroSection = ({
  title,
  subtitle,
  description,
  description2,
  ctaButton,
  ctaLink,
  img,
  bg
}) => {
  return (
    <section
      className={styles.herosection}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        className={`${styles.containerCustom} container-fluid w-[75%] mx-auto py-6 md:py-25`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-0 text-center md:text-start">

          {/* ---------- Left Text (Second on mobile) ---------- */}
          <div className="text-white content order-2 md:order-1">
            <h2 className={styles.subtitle}>{subtitle}</h2>
            <h1 className={styles.title}>{title}</h1>

            <p className={`${styles.description} mt-4 md:mt-12 p1`}>
              {description}
            </p>

            <p className={`${styles.description2} mb-2 md:mb-12 mt-5 p1`}>
              {description2}
            </p>

            {ctaButton && (
              <Link href={ctaLink}>
                <button
                  className={`${styles.heroBtn}
                    bg-[#656565] text-gray-100 font-semibold
                    px-6 py-3 sm:bg-gray-300 sm:text-gray-900
                    sm:px-8 sm:py-3 md:px-10 md:py-4
                    hover:bg-gray-400 transition cursor-pointer
                    rounded-lg text-base sm:text-lg mt-4
                  `}
                >
                  {ctaButton}
                </button>
              </Link>
            )}
          </div>

          {/* ---------- Right Image (First on mobile) ---------- */}
          <div className="flex justify-center order-1 md:order-2">
            <Image
              className={styles.heroImage}
              src={img}
              alt="Hero Image"
              width={400}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
