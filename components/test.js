
import HeroSlider from '../components/HeroSection/Hero-slider/HeroSlider'
import React from 'react'
import HeroContent from '../components/HeroSection/Hero-contant/HeroContant'
import ParallaxSliderSection from '@/components/ParallaxSlider/ParallaxSliderSection'
import ClientLogos from '../components/ClientLogos/ClientLogos'
import VideoParallax from '../components/Vdo/Vdo'
import BlogScrolling from '@/components/ParallaxSlider/TabsScrollSection/BlogScrolling'

import ExploreOurInsights from '@/components/ExploreOurInsights/ExploreOurInsights'


const page = () => {
  return (
    <>
    

      <div className="container-fluid mx-auto customPadding p-0 hero-section">


        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] ">

          <div className="">
            <HeroContent />
          </div>

          <div className="custom-shadow">
            <HeroSlider />
          </div>

        </div>

      </div>
      
      <div className="container-fluid mx-auto bg-gradient-to-b from-[#E3D3CC] to-white">
       <div className='container-fluid mx-auto w-[85%]  p-0 '>
          <ParallaxSliderSection/>
        
          

       </div>
  
        <VideoParallax src="Vdo/vdo.mp4"  />
         <div className='container-fluid mx-auto w-[85%] p-0 '>
           <ClientLogos/>
              <ExploreOurInsights/> 


       </div>
   

      </div>

       <div className='container-fluid mx-auto w-[65%] p-0'  style={{
    backgroundImage: "url('/bg/Rectangle15.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}>
    <h1>hello</h1>
      

       </div>
    </>


  )
}

export default page


