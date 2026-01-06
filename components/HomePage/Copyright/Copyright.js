import React from 'react';
import styles from './copyright.module.css';
import Link from 'next/link';

// ✅ Simple reusable Copyright component
const Copyright = () => {
  return (
    <>
      <div className={`${styles.copyrightContainer} md:flex flex-wrap justify-between mx-auto w-[89%]`}>
        
        {/* ✅ Copyright Text */}
        <div className="md:w-1/2 order-2 md:order-1">
          <p className={styles.copyright}>
            2025 All Rights Reserved. Social Engagement Group.
          </p>
        </div>

        {/* ✅ Footer List */}
        <div className="w-full md:w-1/2 order-1 md:order-2 md:flex flex-wrap justify-end">
          <ul className={styles.footerList}>
            {/* Link component without <a> tag (Next.js 13 and above) */}
            <li><Link href="/terms-and-conditions">Terms of Service</Link></li>
            <li><Link href="/legal">Legal</Link></li>
            {/* <li><Link href="/cookies">Cookies</Link></li> */}
          </ul>
        </div>

      </div>
    </>
  );
};

export default Copyright;
