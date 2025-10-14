
import React from 'react'
import HeroSlider from '@/components/HeroSection/Hero-slider/HeroSlider'
import HeroContent from '@/components/HeroSection/Hero-contant/HeroContant'



// import ParallaxSliderSection from '@/components/ParallaxSlider/ParallaxSliderSection'
// import ClientLogos from '../components/ClientLogos/ClientLogos'
// import VideoParallax from '../components/Vdo/Vdo'
// import BlogScrolling from '@/components/ParallaxSlider/TabsScrollSection/BlogScrolling'
// import ExploreOurInsights from '@/components/ExploreOurInsights/ExploreOurInsights'







const page = () => {
  return (
    <>

      <div className="container-fluid mx-auto customPadding p-0 hero-section pt-16 pb-5 md:pb-10 md:pt-26 hero-section-bg">

        <div className="grid grid-cols-1 md:grid-cols-[35%_65%] ">

          <div className="">
            <HeroContent />
          </div>

          <div className="custom-shadow">
            <HeroSlider />
          </div>

        </div>

      </div>
      
    </>


  )
}

export default page


