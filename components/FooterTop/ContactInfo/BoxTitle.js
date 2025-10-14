import React from "react";
import styles from "./BoxTitle.module.css";

const BoxTitle = () => {
  return (
    <div className="mb-8 text-center md:text-left">
      <h3 className={styles.title}>
        Let’s redefine what’s <br />
        possible together
      </h3>
      <p className={styles.decoration}>
        The future is not coming. It’s here, bold and audacious. Walk with us
        through the digital transformation journey to the future.
      </p>
    </div>
  );
};

export default BoxTitle;
