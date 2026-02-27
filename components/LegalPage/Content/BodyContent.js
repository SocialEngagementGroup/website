import React from 'react'
const BodyContent = ({ sections }) => {
  return (
    <div className={"[&_a]:text-[#6c2823] [&_a]:underline [&_strong]:text-[#6c2823] bg-white py-5 md:py-20"}>
      {/* Map through each section and render the content */}
      {sections.map((section, index) => (
        <div key={index} className="terms-section text-black container w-full md:w-[65%] mx-auto px-5 text-[20px] md:text-[24px]">
          <p className='py-3 md:py-5' dangerouslySetInnerHTML={{ __html: section.text }} />
        </div>
      ))}
    </div>
  )
}

export default BodyContent
