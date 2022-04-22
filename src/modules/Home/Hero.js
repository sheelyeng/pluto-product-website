import React, { useEffect } from 'react';
import HeaderTopBar from '../../components/HeaderTopBar';
import flash from '../../assets/img/flash-dynamic-gradient.png';
import flashWhite from '../../assets/img/flash-dynamic-gradient-white.png';
import moonGradientWhite from '../../assets/img/moon-front-gradient.png';
import anime from 'animejs';
import { SplitText } from '@cyriacbr/react-split-text';

const Hero = () => {
  useEffect(() => {
    setTimeout(() => {
      const timeline = anime.timeline({ autoplay: true });
      timeline
        .add(
          {
            targets: '.sHero__top h1 .heroHeadlineWord',
            translateY: ['110%', '0%'],
            opacity: [0, 1],
            duration: 450,
            delay: anime.stagger(20),
            easing: 'easeOutSine'
          },
          1000
        )
        .add(
          {
            targets: '.sHero__top h1 .flashIcon',
            translateY: ['50%', '0%'],
            opacity: [0, 1],
            duration: 400,
            easing: 'easeOutSine'
          },
          1300
        )

        .add(
          {
            targets: '.sHero__top .sHero__top__text .heroTextWord',
            translateY: ['30%', '0%'],
            opacity: [0, 1],
            duration: 350,
            delay: anime.stagger(16),
            easing: 'easeOutSine'
          },
          1800
        )
        .add(
          {
            targets: '.sHero__top .sHero__top__buttons .btn',
            scale: ['0%', '100%'],
            duration: 430,
            delay: anime.stagger(160),
            easing: 'easeOutBack'
          },
          1970
        );

      //Illustration starts from 9330
      const contentTimeline = anime.timeline({
        autoplay: true //TODO: remove autoplay when done
      });
      contentTimeline
        //TODO: remove when done
        .add({
          targets: '.sHero__bottom .dummyAnim',
          duration: 1000,
          easing: 'easeInSine'
        })
        .add({
          targets: '.sHero__bottom .sHero__bottom__illustration',
          scaleX: ['0%', '100%'],
          duration: 270,
          easing: 'easeInSine'
        })
        .add(
          {
            targets: '.sHero__bottom .sHero__bottom__illustration__top__rect',
            scaleX: ['0%', '100%'],
            duration: 230,
            easing: 'easeInSine'
          },
          '-=30'
        )
        .add(
          {
            targets: '.sHero__bottom .leftCircle',
            scale: ['0%', '100%'],
            duration: 200,
            easing: 'easeInSine'
          },
          '-=200'
        )
        .add(
          {
            targets: '.sHero__bottom .sHero__bottom__illustration__logoBox',
            scale: ['0%', '100%'],
            duration: 600,
            easing: 'easeOutBounce'
          },
          '-=200'
        )
        .add(
          {
            targets: '.sHero__bottom .sHero__bottom__illustration__logoBox img',
            scale: [
              {
                value: '100%',
                duration: 0
              },
              {
                value: '250%',
                duration: 200
              },
              {
                value: '100%',
                duration: 200
              }
            ],
            rotate: [
              {
                value: '-12.39deg',
                duration: 200
              },
              {
                value: '180deg',
                duration: 200
              },
              {
                value: '360deg',
                duration: 200
              }
            ],
            easing: 'easeInSine'
          },
          '-=400'
        );
    }, 0);
  }, []);

  return (
    <section className="sHero">
      <HeaderTopBar />

      <div className="sHero__top flex-center">
        <h1>
          <SplitText
            LetterWrapper={({ children }) => <span className="heroHeadlineWord">{children}</span>}>
            Your
          </SplitText>
          <span className="flashIcon">
            <img src={flash} alt="" />
          </span>
          <span className="word-favorite">
            <SplitText
              LetterWrapper={({ children }) => (
                <span className="heroHeadlineWord">{children}</span>
              )}>
              favorite
            </SplitText>
          </span>
          <span>&nbsp;</span>
          <SplitText
            LetterWrapper={({ children }) => <span className="heroHeadlineWord">{children}</span>}>
            companion for your NFT journey
          </SplitText>
        </h1>
        <div className="sHero__top__text">
          <SplitText
            LineWrapper={({ children }) => <span>{children}</span>}
            LetterWrapper={({ children }) => <span className="heroTextWord">{children}</span>}>
            An innovative browser extension to have all the informations you want accessible
            quickly.
          </SplitText>
        </div>
        <div className="sHero__top__buttons">
          <a href="#" className="btn btn--primary">
            Try it
          </a>
          <a href="#" className="btn btn--secondary">
            <img src={flashWhite} alt="Pluto" />
            <span>Purchase Now</span>
          </a>
        </div>
      </div>

      <div className="sHero__bottom">
        <div className="sHero__bottom__illustration">
          <div className="sHero__bottom__illustration__logoBox flex-center">
            <img src={moonGradientWhite} alt="Pluto" />
          </div>
          <div className="sHero__bottom__illustration__top">
            <div className="sHero__bottom__illustration__top__rect" />
            <div className="sHero__bottom__illustration__top__circle leftCircle" />
            <div className="sHero__bottom__illustration__top__circle lastCircle" />
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
  );
};

export default Hero;
