import React from 'react';
import HeroSection from '@/components/MasterServicesPage/HeroSection/HeroSection';
import AutoSlider from '@/components/MasterServicesPage/AutoSlider/AutoSlider';
import { CreativeData, Digital, Industry } from "@/app/services/(masterPage)/sliderData";
import styles from './master.module.css';

// Function to ensure no repetition if slides count is already fine
const adjustSlides = (slides) => {
  // If slides are fewer than a minimum count, just return as is
  return slides.length < 1 ? [] : slides; // Ensure slides aren't empty
};

const MasterServicesPage = () => {
  const sliders = [
    { title: "Creative", data: adjustSlides(CreativeData) },
    { title: "Digital", data: adjustSlides(Digital) },
    { title: "Industry", data: adjustSlides(Industry) }, // No repetition for Industry slider
  ];

  return (
    <>
      <HeroSection />
      <div className={styles.fade}></div>
      <div className='bg-white'>
        <div className="max-w-[90%] w-full mx-auto py-5 md:py-10 px-3 md:px-10">
          {sliders.map((slider, index) => (
            <section key={index}>
              <h3 className="text-black mt-5">{slider.title}</h3>
              <AutoSlider slides={slider.data} />
            </section>
          ))}
        </div>
      </div>
    </>
  );
};

export default MasterServicesPage;
