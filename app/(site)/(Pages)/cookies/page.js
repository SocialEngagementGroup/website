import React from 'react'
import HeroSection from '@/components/LegalPage/HeroSection/HeroSection'
import { termsandconditions } from "./data";
import CookiesBodyContent from '@/components/LegalPage/Content/CookiesBodyContent'

const page = () => {
  return (
    <div>
      {/* Pass hero data to HeroSection */}
      <HeroSection 
        title={termsandconditions.hero.title} 
        date={termsandconditions.hero.date} 
      />
      
      {/* Pass content sections to BodyContent */}
      <CookiesBodyContent sections={termsandconditions.content.sections} />
    </div>
  )
}

export default page
