import React, { useEffect, useMemo, useRef } from 'react';
import anime from 'animejs';
import { SplitText } from '@cyriacbr/react-split-text';
import ReactVisibilitySensor from 'react-visibility-sensor';

import moonGradientWhite from '../../assets/img/moon-front-gradient.png';
import { useState } from 'react';

const contentTimeline = anime.timeline({ autoplay: false });
const logoBoxTimeline = anime.timeline({ autoplay: false });

const HeroContent = () => {
  const ref = useRef();

  const [isAnimated, setIsAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimationApplied, setIsAnimationApplied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      //Illustration starts from 9300 but content animation starts at 8700
      contentTimeline
        .add({
          targets: '.sHero__bottom .sHero__bottom__illustration',
          scaleX: ['0%', '100%'],
          duration: 300,
          delay: 600,
          easing: 'easeInSine'
        })
        .add(
          {
            targets: '.sHero__bottom .sHero__bottom__illustration__top__rect',
            scaleX: ['0%', '100%'],
            duration: 250,
            easing: 'easeInSine'
          },
          '-=50'
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
        .add({
          targets: '.sHero__bottom .lastCircle',
          scale: ['0%', '100%'],
          duration: 400,
          delay: 100,
          easing: 'easeInSine'
        })
        .add(
          {
            targets: '.sHero__bottom .sHero__bottom__illustration__boxFull',
            scaleY: ['0%', '100%'],
            duration: 200,
            easing: 'easeInSine'
          },
          '-=150'
        );

      contentTimeline
        .add(
          {
            targets: '.sHero__bottom .sHero__bottom__illustration__logoBox',
            scale: ['0%', '100%'],
            duration: 600,
            easing: 'easeOutBounce'
          },
          1000
        )
        .add(
          {
            targets:
              '.sHero__bottom .sHero__bottom__illustration__logoBox .sHero__bottom__illustration__logoBox__imgCont',

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
            easing: 'easeOutSine'
          },
          '-=600'
        );

      //Bottom content animation
      contentTimeline
        .add(
          {
            targets: '.sHero__bottom .sHero__bottom__content a',
            scale: ['0%', '100%'],
            duration: 500,
            easing: 'easeOutBack'
          },
          60
        )
        .add(
          {
            targets: '.sHero__bottom .contentHeadlineLetter',
            translateY: ['30%', '0%'],
            opacity: [0, 1],
            duration: 300,
            delay: anime.stagger(12),
            easing: 'easeOutSine'
          },
          0
        )
        .add(
          {
            targets: '.sHero__bottom .contentTextLetter',
            translateY: ['50%', '0%'],
            opacity: [0, 1],
            duration: 180,
            delay: anime.stagger(7),
            easing: 'easeOutSine'
          },
          1400 //10100
        );
      logoBoxTimeline.add({
        targets: '.sHero__bottom .sHero__bottom__illustration__logoBox img',
        rotate: ['0deg', '360deg'],
        duration: 2000,
        direction: 'alternate',
        easing: 'linear',
        changeComplete: () => {
          setTimeout(() => {
            logoBoxTimeline.restart();
          }, 0);
        }
      });

      setIsAnimationApplied(true);
    }, 0);
  }, []);

  useEffect(() => {
    animateSection();
  }, [isAnimated, isVisible, isAnimationApplied]);

  const visibilityChangeHandler = (isVisible) => {
    setIsVisible(isVisible);
  };

  const animateSection = () => {
    if (isAnimated || !isVisible || !ref.current || !isAnimationApplied) return;
    setIsAnimated(true);

    if (ref.current.offsetTop + 100 > window.innerHeight) {
      window.scrollTo({
        top: ref.current.offsetTop - 200,
        left: 0,
        behavior: 'smooth'
      });
    }
    contentTimeline.play();
    logoBoxTimeline.play();
  };

  const subHeadline = useMemo(
    () => (
      <SplitText
        LineWrapper={({ children }) => <span>{children}&nbsp;</span>}
        LetterWrapper={({ children }) => <span className="contentHeadlineLetter">{children}</span>}>
        Pluto is a browser extension who let you manage and see all the statistics you want on the
        NFT market.
      </SplitText>
    ),
    []
  );

  const bottomContentText = useMemo(
    () => (
      <SplitText
        LineWrapper={({ children }) => <span>{children}&nbsp;</span>}
        LetterWrapper={({ children }) => <span className="contentTextLetter">{children}</span>}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat
      </SplitText>
    ),
    []
  );

  return (
    <ReactVisibilitySensor
      partialVisibility
      minTopValue={100}
      onChange={visibilityChangeHandler}
      scrollCheck={true}
      active={true}>
      <div className="sHero__bottom" ref={ref}>
        <div className="sHero__bottom__illustration">
          <div className="sHero__bottom__illustration__logoBox flex-center">
            <div className="sHero__bottom__illustration__logoBox__imgCont">
              <img src={moonGradientWhite} alt="Pluto" />
            </div>
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
          <h3>{subHeadline}</h3>
          <h4>{bottomContentText}</h4>
        </div>
      </div>
    </ReactVisibilitySensor>
  );
};

export default HeroContent;
