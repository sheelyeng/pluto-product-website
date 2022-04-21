import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import FeatureSlide from '../../components/FeatureSlide';

import { freeTools } from '../../assets/data/toolsData';

function FeaturesSlider() {
  return (
    <section className="sFeatureSlider">
      <Swiper
        centeredSlides
        slidesPerView={'auto'}
        loop
        mousewheel
        grabCursor
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        speed={500}>
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
