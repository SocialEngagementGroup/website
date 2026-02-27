import React from 'react'

const CookiesBodyContent = ({ sections }) => {
  return (
    <div className={"[&_a]:text-[#6c2823] [&_a]:underline [&_strong]:text-[#6c2823] bg-white py-5 md:py-20"}>
      {/* Map through each section and render the content */}
      {sections.map((section, index) => (
        <div key={index} className="terms-section text-black container w-full md:w-[65%] mx-auto px-5 text-[20px] md:text-[24px]">
          {/* Render the text */}
          {section.text && (
            <p className='py-3 md:py-5' dangerouslySetInnerHTML={{ __html: section.text }} />
          )}

          {/* Render the title and list if available */}
          {section.title && section.list && (
            <>
              <h5 className={`capitalize text-[#6c2823] text-[28px] md:text-[32px] font-bold py-3 md:py-5`}>{section.title}</h5>
              <ul className="list-disc pl-5 md:pl-12 py-2 md:py-4 space-y-3">
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
