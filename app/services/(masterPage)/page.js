import React from 'react';
import HeroSection from '@/components/MasterServicesPage/HeroSection/HeroSection';
import AutoSlider from '@/components/MasterServicesPage/AutoSlider/AutoSlider';
import { CreativeData, Digital, Industry } from "@/app/services/(masterPage)/sliderData";
import styles from './master.module.css';

// Function to ensure no repetition if slides count is already fine

const MasterServicesPage = () => {
  const sliders = [
    { title: "Creative", data: CreativeData },
    { title: "Digital", data: Digital },
    { title: "Industry", data:Industry }, // No repetition for Industry slider
  ];

  return (
    <>
      <HeroSection />
      <div className={styles.fade}></div>
      <div className='bg-[#232326'>
        <div className="max-w-[90%] w-full mx-auto py-5 md:py-10 px-3 md:px-10">
          {sliders.map((slider, index) => (
            <section key={index}>
              <h3 className="text-white mt-5">{slider.title}</h3>
              <AutoSlider slides={slider.data} />
            </section>
          ))}
        </div>
      </div>
    </>
  );
};

export default MasterServicesPage;
