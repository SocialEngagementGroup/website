import React from 'react';
import styles from './copyright.module.css';
import Link from 'next/link';

// ✅ Simple reusable Copyright component
const Copyright = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <>
      <div className={`${styles.copyrightContainer} md:flex flex-wrap justify-between mx-auto w-[89%]`}>
        
        {/* ✅ Copyright Text */}
        <div className="md:w-1/2 md:block hidden">
          <p className={styles.copyright}>
            Social Engagement Group © {currentYear} | All rights reserved
          </p>
        </div>

        {/* ✅ Footer List */}
        <div className="w-full md:w-1/2 md:flex flex-wrap justify-end mt-4 md:mt-0">
          <ul className={styles.footerList + " space-y-1.5"}>
            {/* Link component without <a> tag (Next.js 13 and above) */}
            <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/cookies">Cookies</Link></li>
            <li><Link href="/legal-notice">Legal Notice</Link></li>

          </ul>
        </div>

           
        {/* ✅ Copyright Text */}
        <div className="md:w-1/2 block md:hidden mt-8 md:mt-8">
          <p className={styles.copyright}>
            Social Engagement Group <br/> © {currentYear} | All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Copyright;
