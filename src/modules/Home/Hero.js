import React from 'react';
import HeaderTopBar from '../../components/HeaderTopBar';
import HeroFront from './HeroFront';
import HeroContent from './HeroContent';

const Hero = () => {
  return (
    <section className="sHero">
      <HeaderTopBar />
      <HeroFront />
      <HeroContent />
    </section>
  );
};

export default Hero;
