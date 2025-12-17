import React from "react";
import Image from "next/image";
import styles from "./CostofSection.module.css";

const CostofSection = ({ heading1, heading2, description, items }) => {

  return (
    <section className="bg-white">
      <div className={styles.container + " w-[78%] mx-auto text-center py-10 md:py-20"}>

        {/* Heading + Description */}
        <div>
          <h3 className={`${styles.heading} mb-5 text-black`}>
            {heading1}
          </h3>

          <p
            className={`${styles.description} text-black`}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        {/* Second Heading */}
        <h4 className={`${styles.boxheading} mt-15 md:mt-30 mb-15`}>
          {heading2}
        </h4>

        {/* Items */}

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={item.img}
                alt="icon"
                width={120}
                height={120}
                className={`${styles.itemImage} mb-4`}
              />
              <p
                className={styles.itemText}
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CostofSection;
