import React from 'react'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import StickyImageSections from '@/components/BrandSucceed/StickyImageSections'

const BrandingSection = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full px-4 md:px-0">
      <div className="w-full md:w-[80%] max-w-5xl">
        <div className="text-center section-title-custom mb-10">
          <SectionTitle
            id="We-Ignite-the-Future"
            subtitle="We Ignite the Future, One Innovation at a Time!"
            description="We combine smart strategy, bold creative, end-to-end execution, and
            actionable insights to ensure every investment drives meaningful impact."
          />
        </div>
        <StickyImageSections />
      </div>
    </div>
  )
}

export default BrandingSection
