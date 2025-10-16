import React from 'react'
import HeroSection from "@/components/HeroSection/HeroSection"
import ParallaxSliderSection from '@/components/ParallaxSlider/ParallaxSliderSection'
import BrandSucceed from '@/components/BrandSucceed/BrandSucceed'
import FooterTop from '@/components/FooterTop/FooterTop'
import ClientsLogo from '@/components/ClientLogos/ClientLogos'
import TextSlider from '@/components/TextSlider/TextSlider'
import Slider from '@/components/ClientLogos/Slider'
const page = () => {
  return (
    <>
       <HeroSection/>
        <div className='bg-[#E3D3CC] '>
             <div className='bg-[#E3D3CC] w-[70%] mx-auto'>
            <Slider/>
        </div>
            
        </div>
       <ParallaxSliderSection/>

         <ClientsLogo />
          
       {/* <BrandSucceed/>  */}
       <FooterTop/>
       <TextSlider/>
    </>
  )
}

export default page
