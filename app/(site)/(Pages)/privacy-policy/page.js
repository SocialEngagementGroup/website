import React from 'react'
import HeroSection from '@/components/LegalPage/HeroSection/HeroSection'
import { PrivacyPolicy } from '@/app/(Pages)/privacy-policy/data'
import BodyContent from '@/components/LegalPage/Content/BodyContent'

const page = () => {
  return (
    <div>
      {/* Pass hero data to HeroSection */}
      <HeroSection 
        title={PrivacyPolicy.hero.title} 
        date={PrivacyPolicy.hero.date} 
      />
      
      {/* Pass content sections to BodyContent */}
      <BodyContent sections={PrivacyPolicy.content.sections} />
    </div>
  )
}

export default page
