import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import FeatureSlide from '../../components/FeatureSlide';

import { freeTools } from '../../assets/data/toolsData';

function FeaturesSlider() {
  SwiperCore.use([Autoplay]);

  return (
    <section className="sFeatureSlider">
      <Swiper
        centeredSlides
        slidesPerView={'auto'}
        loop
        mousewheel
        grabCursor
        autoplay={{ delay: 0, disableOnInteraction: false, waitForTransition: false }}
        speed={2000}>
        {freeTools.map((item, index) => (
          <SwiperSlide key={index}>
            <FeatureSlide {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default FeaturesSlider;
