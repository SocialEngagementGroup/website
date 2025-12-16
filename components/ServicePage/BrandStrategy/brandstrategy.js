import React from "react";
import styles from "./Brandstrategy.module.css";
import Image from "next/image";

const BrandStrategy = ({ heading, items, img }) => {
  return (
    <section className={styles.section}>
      <div
        className={
          styles.customPadding +
          " container-fluid mx-auto pt-20"
        }
      >
        <div
          className="
            grid grid-cols-1
            md:grid-cols-[50%_50%]
            [@media(min-width:1300px)]:grid-cols-[40%_58%]
            gap-4 md:gap-10
            items-center justify-center text-start
          "
        >
          {/* ---------- Left: Image ---------- */}
          <div className={styles.imageBox + " flex justify-center"}>
            <div className={styles.imageBoxInner}>
              <Image
                src={img}
                alt="Brand Strategy Image"
                width={600}
                height={400}
                className={styles.imagePosition}
              />
            </div>
          </div>

          {/* ---------- Right: Heading + List ---------- */}
          <div
            className={
              styles.textContainer +
              " flex justify-center md:justify-center mr:0 md:mr-10 mt-6  md:mt-0"
            }
          >
            <div className={styles.textBox + " text-black  px-5 md:px-0"}>
              {/* Heading */}
              <h3 className={styles.heading}>{heading}</h3>

              {/* List Items */}
              <ul className={styles.list + " px-5 md:px-0"}>
                {items?.map((item, index) => (
                  <li
                    key={index}
                    className={styles.listItem + " p1"}
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  ></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStrategy;
