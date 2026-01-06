import React from 'react'
import HeroSection from '@/components/LegalPage/HeroSection/HeroSection'
import { legal } from '@/app/(Pages)/legal/data'
import BodyContent from '@/components/LegalPage/Content/BodyContent'

const page = () => {
  return (
    <div>
      {/* Pass hero data to HeroSection */}
      <HeroSection 
        title={legal.hero.title} 
        date={legal.hero.date} 
      />
      
      {/* Pass content sections to BodyContent */}
      <BodyContent sections={legal.content.sections} />
    </div>
  )
}

export default page
