import Marquee from 'react-fast-marquee';

import FeatureSlide from '../../components/FeatureSlide';

import { freeTools } from '../../assets/data/toolsData';

function FeaturesSlider() {
  return (
    <section className="sFeatureSlider">
      <Marquee speed={300} gradient={false}>
        {freeTools.map((item, index) => (
          <FeatureSlide {...item} key={index} />
        ))}
      </Marquee>
    </section>
  );
}

export default FeaturesSlider;
