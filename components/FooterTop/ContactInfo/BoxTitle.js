import React from "react";
import styles from "./BoxTitle.module.css";

const BoxTitle = () => {
  return (
    <div className="mb-2 text-left">
      <h3 className={styles.title}>
        Let’s create the next<br />
        chapter of your story.

      </h3>
      <p className={`${styles.decoration}`}>
         Every story deserves to be seen, heard, and remembered. Let’s bring yours to life with clarity and purpose.
      </p>
    </div>
  );
};

export default BoxTitle;
