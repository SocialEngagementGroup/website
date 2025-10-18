import React from 'react'
import HeroSection from "@/components/HeroSection/HeroSection"
import ParallaxSliderSection from '@/components/ParallaxSlider/ParallaxSliderSection'

import FooterTop from '@/components/FooterTop/FooterTop'
import ClientsLogo from '@/components/ClientLogos/ClientLogos'
import TextSlider from '@/components/TextSlider/TextSlider'
import Slider from '@/components/ClientLogos/Slider'
import StickyImageSections from '@/components/BrandSucceed/StickyImageSections'
const page = () => {
  return (
    <>
       <HeroSection/>
        <div className='bg-[#E3D3CC] '>
             <div className='bg-[#E3D3CC] w-[70%] mx-auto herobrandlogo'>
            <Slider/>
        </div>
            
        </div>
       <ParallaxSliderSection/>

         <ClientsLogo />
          
       <div className='bg-white'>
        <StickyImageSections/> 
       </div>
       <FooterTop/>
       <TextSlider/>
    </>
  )
}

export default page
