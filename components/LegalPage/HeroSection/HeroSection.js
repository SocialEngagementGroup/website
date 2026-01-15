import React from 'react'
import styles from './hero.module.css'

const HeroSection = ({ title, date }) => {
  return (
    <div className={styles.container + " pt-25 md:pt-38 pb-15 md:pb-25 text-center z-10 px-5"}>
      <h1>{title}</h1>
      <p className='mt-5'>{date}</p>
    </div>
  )
}

export default HeroSection
