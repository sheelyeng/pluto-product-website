import FeatureBox from '../../components/FeatureBox';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { freeTools, premiumTools } from '../../assets/data/toolsData';

function Hero() {
  return (
    <section className="sFeatures">
      <div className="sFeatures__noiseBg" />
      <div className="sFeatures__container">
        <h1>Features</h1>
        <div className="sFeatures__section">
          <h2>Free Tools</h2>
          <div className="sFeatures__section__divider" />
          <div className="sFeatures__section__boxes">
            {freeTools.map((feat, index) => (
              <FeatureBox key={index} {...feat} />
            ))}
            <div className="sFeatures__section__boxes__slider">
              <FreeToolsSlider />
            </div>
          </div>
        </div>
        <div className="sFeatures__section">
          <h2>Premium Tools</h2>
          <div className="sFeatures__section__divider" />
          <div className="sFeatures__section__boxes">
            {premiumTools.map((feat, index) => (
              <FeatureBox key={index} {...feat} />
            ))}

            <div className="sFeatures__section__boxes__slider premiumSlider">
              <PremiumToolsSlider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FreeToolsSlider = () => (
  <Swiper slidesPerView={1.408} spaceBetween={37} loop centeredSlides>
    {freeTools.map((feat, index) => (
      <SwiperSlide key={index}>
        <FeatureBox key={index} {...feat} />
      </SwiperSlide>
    ))}
  </Swiper>
);

const PremiumToolsSlider = () => (
  <Swiper slidesPerView={1.33} spaceBetween={41} loop>
    {premiumTools.map((feat, index) => (
      <SwiperSlide key={index}>
        <FeatureBox key={index} {...feat} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default Hero;
