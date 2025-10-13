// components/Button.js
import React from 'react';
import styles from './Button.module.css'; // You'll create this CSS module

const Button = ({ children, className, onClick }) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      <div className={styles['button-text']}>{children}</div>
      <div className={styles['button-circle-wrapper']}>
        <div className={`${styles['button-icon']} ${styles['_1']}`}>
          <svg height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.66699 11.3332L11.3337 4.6665" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M4.66699 4.6665H11.3337V11.3332" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </div>
        <div className={`${styles['button-icon']} ${styles['_2']}`}>
          <svg height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.66699 11.3332L11.3337 4.6665" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M4.66699 4.6665H11.3337V11.3332" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </div>
      </div>
      <div className={`${styles['button-circlee']} ${styles['background-color-green']}`}></div>
    </button>
  );
};

export default Button;