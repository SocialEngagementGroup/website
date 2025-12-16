import React from 'react';
import HeroSection from '@/components/MasterServicesPage/HeroSection/HeroSection';
import AutoSlider from '@/components/MasterServicesPage/AutoSlider/AutoSlider';
import { sliderData1, sliderData2, sliderData3 } from "@/app/services/(masterPage)/sliderData";
import styles from './master.module.css';
// Function to repeat slides to match a minimum count
const repeatSlides = (slides, minCount = 8) => {
  const result = [];
  while (result.length < minCount) {
    result.push(...slides);
  }
  return result.slice(0, minCount);
};

const MasterServicesPage = () => {
  const sliders = [
    { title: "Creative", data: repeatSlides(sliderData1) },
    { title: "Digital", data: repeatSlides(sliderData2) },
    { title: "Industry", data: repeatSlides(sliderData3) }, // now repeated to match others
  ];

  return (
    <>
      <HeroSection />
      <div className={styles.fade}></div>
      <div className='bg-white'>
        <div className="max-w-[90%] w-full mx-auto">
          {sliders.map((slider, index) => (
            <section key={index} className="py-5 md:py-10">
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
