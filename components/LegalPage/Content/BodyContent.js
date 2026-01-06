import React from 'react'
import styles from './bodycontent.module.css'
const BodyContent = ({ sections }) => {
  return (
    <div className={styles.container + " bg-white py-5 md:py-20"}>
      {/* Map through each section and render the content */}
      {sections.map((section, index) => (
        <div key={index} className="terms-section text-black container w-full md:w-[65%] mx-auto text-[16px] md:text-[18px] px-5">
          <p className='py-3 md:py-5' dangerouslySetInnerHTML={{ __html: section.text }} />
        </div>
      ))}
    </div>
  )
}

export default BodyContent
