import React from 'react'
import HeroSection from "@/components/HomePage/HeroSection/HeroSection"
import ParallaxSliderSection from '@/components/HomePage/ParallaxSlider/ParallaxSliderSection'
import ClientsLogo from '@/components/HomePage/ClientLogos/ClientLogos'
import Slider from '@/components/HomePage/ClientLogos/Slider'
import BrandingSection from '@/components/HomePage/BrandSucceed/BrandingSection'



const page = () => {
  return (
    <>
       <HeroSection/>
        <div className='bg-[#E3D3CC] '>
             <div className='bg-[#E3D3CC] md:w-[70%] w-[100%] mx-auto herobrandlogo'>
            <Slider/>
        </div>
            
        </div>
       <ParallaxSliderSection/>
         <ClientsLogo />
       <div className='bg-white'>
         <BrandingSection/>
       </div>
       
    </>
  )
}

export default page
