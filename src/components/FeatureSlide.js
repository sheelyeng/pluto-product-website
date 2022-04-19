import { SwiperSlide } from 'swiper/react';
import eth from '../assets/img/eth-dynamic-gradient.png';

function FeatureSlide() {
  return (
    <SwiperSlide>
      <img src={eth} alt="" />
      <h4>NFT Address Visualizer</h4>
      <div className="circleSeparator" />
    </SwiperSlide>
  );
}

export default FeatureSlide;
