import React from 'react'
import styles from './bodycontent.module.css'

const CookiesBodyContent = ({ sections }) => {
  return (
    <div className={styles.container + " bg-white py-5 md:py-20"}>
      {/* Map through each section and render the content */}
      {sections.map((section, index) => (
        <div key={index} className="terms-section text-black container w-full md:w-[65%] mx-auto text-[16px] md:text-[18px] px-5">
          {/* Render the text */}
          {section.text && (
            <p className='py-3 md:py-5' dangerouslySetInnerHTML={{ __html: section.text }} />
          )}

          {/* Render the title and list if available */}
          {section.title && section.list && (
            <>
              <h5 className={`${styles.subtitle} text-[22px] md:text-[26px] py-3 md:py-5`}>{section.title}</h5>
              <ul className="list-disc pl-5 py-2 md:py-4 space-y-3">
                {section.list.map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item.item }} />
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default CookiesBodyContent
