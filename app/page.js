import React from 'react'

export const metadata = {
  title: "Home",
  description: "Experience the future of digital marketing with SEG. We combine human creativity and AI-powered growth strategies to elevate your brand and drive conversions.",
  openGraph: {
    title: "Home | Social Engagement Group",
    description: "Elevate your brand with SEG's blend of human creativity and AI-powered digital growth strategies.",
    url: "/",
  },
  twitter: {
    title: "Home | Social Engagement Group",
    description: "Elevate your brand with SEG's blend of human creativity and AI-powered digital growth strategies.",
  },
};
import HeroSection from "@/components/HomePage/HeroSection/HeroSection"
import ParallaxSliderSection from '@/components/HomePage/ParallaxSlider/ParallaxSliderSection'
import ClientsLogo from '@/components/HomePage/ClientLogos/ClientLogos'
import BrandingSection from '@/components/HomePage/BrandSucceed/BrandingSection'



const page = () => {
  return (
    <>
      <HeroSection />
      <ParallaxSliderSection />
      <ClientsLogo />
      <div className='bg-white'>
        <BrandingSection />
      </div>

    </>
  )
}

export default page
