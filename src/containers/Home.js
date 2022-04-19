import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Footer from '../components/Footer';
import PriceBox from '../components/PriceBox';
// import FeatureSlide from '../components/FeatureSlide';
import FeatureBox from '../components/FeatureBox';
import HeaderTopBar from '../components/HeaderTopBar';

import moonGradientWhite from '../assets/img/moon-front-gradient.png';
import flashWhite from '../assets/img/flash-dynamic-gradient-white.png';
import eth from '../assets/img/eth-dynamic-gradient.png';
import flash from '../assets/img/flash-dynamic-gradient.png';

function Home() {
  return (
    <>
      <section className="sHero">
        <HeaderTopBar />

        <diav className="sHero__top flex-center">
          <h1>
            Your
            <span>
              <img src={flash} alt="" />
            </span>
            <span className="word-favorite">favorite</span> companion for your NFT journey
          </h1>
          <p>
            An innovative browser extension to have all the informations you want accessible
            quickly.
          </p>
          <div className="sHero__top__buttons">
            <a href="#" className="btn btn--primary">
              Try it
            </a>
            <a href="#" className="btn btn--secondary">
              <img src={flashWhite} alt="Pluto" />
              <span>Purchase Now</span>
            </a>
          </div>
        </diav>

        <div className="sHero__bottom">
          <div className="sHero__bottom__illustration">
            <div className="sHero__bottom__illustration__logoBox flex-center">
              <img src={moonGradientWhite} alt="Pluto" />
            </div>
            <div className="sHero__bottom__illustration__top">
              <div className="sHero__bottom__illustration__top__leftCont">
                <div className="sHero__bottom__illustration__top__rect" />
                <div className="sHero__bottom__illustration__top__circle" />
              </div>
              <div className="sHero__bottom__illustration__top__circle" />
            </div>
            <div className="sHero__bottom__illustration__boxFull" />
          </div>
          <div className="sHero__bottom__content">
            <a href="#" className="btn btn--primary-sqr">
              What is Pluto?
            </a>
            <h3>
              Pluto is a browser extension who let you manage and see all the statistics you want on
              the NFT market.
            </h3>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </h4>
          </div>
        </div>
      </section>
      <section className="sFeatures">
        <div className="sFeatures__noiseBg" />
        <div className="sFeatures__container">
          <h1>Features</h1>
          <div className="sFeatures__section">
            <h2>Free Tools</h2>
            <div className="sFeatures__section__divider" />
            <div className="sFeatures__section__boxes">
              {[...new Array(7)].map((_, index) => (
                <FeatureBox key={index} />
              ))}
            </div>
          </div>
          <div className="sFeatures__section">
            <h2>Free Tools</h2>
            <div className="sFeatures__section__divider" />
            <div className="sFeatures__section__boxes">
              {[...new Array(2)].map((_, index) => (
                <FeatureBox key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="sFeatureSlider">
        <Swiper slidesPerView={'auto'} loop>
          {[...new Array(9)].map((item, index) => (
            <SwiperSlide key={index}>
              <img src={eth} alt="" />
              <h4>NFT Address Visualizer</h4>
              <div className="circleSeparator" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="sPricing">
        <div className="sPricing__container">
          <h1>Pricing Plan</h1>
          <div className="sPricing__boxes">
            <PriceBox />
            <PriceBox />
            <PriceBox />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
