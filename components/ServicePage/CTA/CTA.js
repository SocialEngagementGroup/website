import React from 'react'
import styles from './placeholder.module.css'

const PlaceHolder = ({ bg, title, description, button, link }) => {
  return (
    <section
      className="w-full flex items-center justify-center p-5 md:p-15 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        className={`${styles.bgglass} w-[80%] flex flex-col md:flex-row items-center justify-between sm:p-4 md:p-8 lg:p-10 xl:p-12 2xl:p-20 border-4 border-gray-700`}
      >
        {/* ---------- Title (Second on mobile, first on desktop) ---------- */}
        <h3
          className="text-center md:text-left text-white"
          dangerouslySetInnerHTML={{ __html: title || "" }}
        />

        {/* ---------- Description (Added single p tag for description) ---------- */}
        {description && (
          <p className="text-center md:text-left text-white mt-4 md:mt-0 bg-amber-900">
            {description}
          </p>
        )}

        {/* ---------- Button (First on mobile, second on desktop) ---------- */}
        <a href={link}>
          <button className={`${styles.button} py-2 md:py-2 px-5 md:px-8 md:mt-0 mt-5 cursor-pointer capitalize`}>
            {button}
          </button>
        </a>
      </div>
    </section>
  )
}

export default PlaceHolder
