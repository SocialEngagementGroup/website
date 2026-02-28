import React from 'react'

const PlaceHolder = ({ bg, title, description, button, link }) => {
  return (
    <section
      className="w-full flex items-center justify-center p-5 md:p-15 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        className={`shadow-[rgba(0,0,0,0.09)_0px_0.637px_0.637px_-0.938px,rgba(0,0,0,0.08)_0px_1.932px_1.932px_-1.875px,rgba(0,0,0,0.07)_0px_5.106px_5.106px_-2.813px,rgba(0,0,0,0.03)_0px_16px_16px_-3.75px] rounded-[22px] bg-[rgba(35,35,38,0.78)] max-[994px]:p-[20px] max-[994px]:h-auto max-[994px]:py-[5rem] w-[80%] flex flex-col md:flex-row items-center justify-between sm:p-4 md:p-8 lg:p-10 xl:p-12 2xl:p-20 border-4 border-gray-700`}
      >
        {/* ---------- Title (Second on mobile, first on desktop) ---------- */}
        <h2
          className="text-center md:text-left text-white font-[400] [&_strong]:!font-black"
          dangerouslySetInnerHTML={{ __html: title || "" }}
        />

        {/* ---------- Description (Added single p tag for description) ---------- */}
        {description && (
          <p className="text-center md:text-left text-white mt-4 md:mt-0">
            {description}
          </p>
        )}

        {/* ---------- Button (First on mobile, second on desktop) ---------- */}
        <a href={link}>
          <button className={`rounded-full bg-white shadow-[0_4px_4px_6px_rgba(0,0,0,0.35)] text-[#182027] text-center font-['Inter'] font-semibold py-2 md:py-2 px-5 md:px-8 md:mt-0 mt-5 cursor-pointer capitalize`}>
            {button}
          </button>
        </a>
      </div>
    </section>
  )
}

export default PlaceHolder
