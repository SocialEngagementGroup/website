import React from "react";
import styles from "./Content.module.css";

const HeroContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <button className={styles.heroBtn}>STRATEGIZE</button>

        <p className={styles.heroSubtext}>
          Great marketing doesn’t happen by accident. We take a deep dive into
          your brand to uncover what makes your brand tick and what will make
          your audience click. A smart strategy means fewer guesses, better
          targeting, and way more wins.
        </p>
      </div>
    </div>
  );
};

export default HeroContent;
