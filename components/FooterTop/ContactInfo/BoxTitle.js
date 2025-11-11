import React from "react";
import styles from "./BoxTitle.module.css";

// ✅ Component for a section title with a subtitle/description
const BoxTitle = () => {
  return (
    // ✅ Wrapper with bottom margin and left-aligned text
    <div className="mb-2 text-left">

      {/* ✅ Main heading */}
      <h3 className={styles.title}>
        Let’s create the next<br />
        chapter of your story
      </h3>

      {/* ✅ Subtitle/description with custom decoration styles */}
      <p className={`${styles.decoration}`}>
        Every story deserves to be seen, heard, and remembered. Let’s bring yours to life with clarity and purpose.
      </p>
    </div>
  );
};

export default BoxTitle;
