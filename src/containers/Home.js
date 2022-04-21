import Hero from '../modules/Home/Hero';
import Features from '../modules/Home/Features';
import FeaturesSlider from '../modules/Home/FeaturesSlider';
import Pricing from '../modules/Home/Pricing';
import Footer from '../components/Footer';

function Home() {
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
