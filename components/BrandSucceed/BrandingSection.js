import React from 'react'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import StickyImageSections from '@/components/BrandSucceed/StickyImageSections'
import style from './BrandingSection.module.css'

// ✅ Branding section component
const BrandingSection = () => {
  return (
    // ✅ Full section wrapper with padding & centering
    <div 
      id='aboutUs' 
      className="flex flex-col items-center justify-center text-center w-full px-4 md:px-0 BrandingSection py-12 md:py-20"
    >
      {/* ✅ Container for width control */}
      <div className="w-full md:w-[80%] max-w-5xl">

        {/* ✅ Title section with custom CSS */}
        <div className={`${style.customsectiontitle} text-center section-title-custom mb-10`}>
          <SectionTitle
            id="We-Ignite-the-Future"
            title="About Us"
            subtitle={<>How we help <span>your</span> brand succeed</>}
            description=" Every visual, message, and moment we craft is made to tell your story with intention, evoke emotion, and drive real engagement."
          />
        </div>

        {/* ✅ Sticky interactive image + content section */}
        <StickyImageSections />
      </div>
    </div>
  )
}

export default BrandingSection
