import React from 'react'
import styles from "./copyright.module.css"

// ✅ Simple reusable Copyright component
const Copyright = () => {
  return (
    <div>
      {/* ✅ Display copyright text with module CSS styling */}
      <p className={styles.copyright}>
        2025 All Rights Reserved. Social Engagement Group.
      </p>
    </div>
  )
}

export default Copyright
