import React from "react";
import styles from "./Media.module.css";

const Media = () => {
  return (
    <div className={styles.mediaWrapper}>

      <div className={styles.imageContainer}>
        <div className={styles.imageLeft}>
          <img src="/bg/innersliderbg.png" alt="Left Layer" />
        </div>
      </div>
    </div>
  );
};

export default Media;
