import React from "react";
import styles from "./ProfessionalBranding.module.css";

const ProfessionalBranding = ({ heading, items, video }) => {
  return (
    <section className={styles.section}>
      <div
        className={`${styles.containerCustom} container-fluid w-[78%] mx-auto py-6 md:py-28 px-6 md:px-7`}
      >
        <div
          className="
            grid 
            grid-cols-1 
            md:grid-cols-[50%_50%]
            [@media(min-width:1300px)]:grid-cols-[60%_35%]
            gap-4 
            md:gap-5
            items-center
            text-start
          "
        >
          {/* ---------- LEFT: Heading + List ---------- */}
          <div className="text-white order-2 md:order-1 mt-4  px-5 md:px-0" >
            <h3 className={styles.heading}>{heading}</h3>

            <ul className={styles.list + ""}>
              {items?.map((item, index) => (
                <li
                  key={index}
                  className={`${styles.listItem} p1`}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                ></li>
              ))}
            </ul>
          </div>

          {/* ---------- RIGHT: Video ---------- */}
          <div className="order-1 md:order-2">
            <div className="flex justify-center overflow-hidden aspect-[4/3] w-full">
              <video
                className={`${styles.videoBox} h-full w-full object-cover`}
                autoPlay
                loop
                muted
              >
                <source src={video} type="video/mp4" />
             
              </video>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProfessionalBranding;
