import Hero from '../modules/Home/Hero';
import Features from '../modules/Home/Features';
import FeaturesSlider from '../modules/Home/FeaturesSlider';
import Pricing from '../modules/Home/Pricing';
import Footer from '../components/Footer';
// import { useEffect } from 'react';

function Home() {
  // useEffect(() => {
  //   window.addEventListener('load', () => {
  //     window.scrollTo({ top: 0, left: 0 });
  //   });
  // }, []);

  return (
    <>
      <Hero />
      <Features />
      <FeaturesSlider />
      <Pricing />
      <Footer />
    </>
  );
}

export default Home;
