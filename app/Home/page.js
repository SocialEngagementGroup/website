import React from 'react'
import HeroSection from "@/components/HeroSection/HeroSection"
import ParallaxSliderSection from '@/components/ParallaxSlider/ParallaxSliderSection'
import BrandSucceed from '@/components/BrandSucceed/BrandSucceed'
import FooterTop from '@/components/FooterTop/FooterTop'
import ClientsLogo from '@/components/ClientLogos/ClientLogos'
const page = () => {
  return (
    <>
       <HeroSection/>
       <ParallaxSliderSection/>

         <ClientsLogo />

       {/* <BrandSucceed/>  */}
       <FooterTop/>
    </>
  )
}

export default page
