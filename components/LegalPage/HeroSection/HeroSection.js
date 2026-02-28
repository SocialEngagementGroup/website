import React from 'react'

const HeroSection = ({ title, date }) => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center overflow-hidden pt-25 md:pt-38 pb-15 md:pb-25 text-center font-sans text-white z-10">
      <div 
        className="absolute inset-0 bg-[url('/assets/images/backgrounds/legal-bg.png')] bg-cover bg-center bg-no-repeat blur-sm transform scale-105"
        style={{ zIndex: -2 }}
      />
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/50" style={{ zIndex: -1 }} />

      <div className="relative z-10 px-5">
        <h1>{title}</h1>
        <p className='mt-5'>{date}</p>
      </div>
    </div>
  )
}

export default HeroSection
