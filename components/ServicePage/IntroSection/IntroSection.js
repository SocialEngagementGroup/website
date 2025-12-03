
import Image from "next/image";
import React from "react";
import styles from "./IntroSection.module.css";
const IntroSection = ({ heading, description }) => {
  return (
    <section className={styles.introsection + " text-center px-4 py-10 md:py-25"}>
      <h3 className={styles.heading + " py-5"}>{heading}</h3>
      <p className={styles.description + " px-1 p1"}>{description}</p>
    </section>
  );
};

export default IntroSection;
