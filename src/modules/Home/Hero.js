import React, { useEffect, useMemo, useRef, useState } from 'react';
import anime from 'animejs';
import { SplitText } from '@cyriacbr/react-split-text';
import ReactVisibilitySensor from 'react-visibility-sensor';

import HeaderTopBar from '../../components/HeaderTopBar';

import flash from '../../assets/img/flash-dynamic-gradient.png';
import flashWhite from '../../assets/img/flash-dynamic-gradient-white.png';
import moonGradientWhite from '../../assets/img/moon-front-gradient.png';

const Hero = () => {
  const ref = useRef();
  // const [isTopAnimated, setIsTopAnimated] = useState(false);
  const [isBottomAnimated, setIsBottomAnimated] = useState(false);

  const timeline = anime.timeline({ autoplay: true });
  const contentTimeline = anime.timeline({ autoplay: false });
  const logoBoxTimeline = anime.timeline({ autoplay: false });

  useEffect(() => {
    setTimeout(() => {
      timeline
        .add(
          {
            targets: '.sHero__top h1 .heroHeadlineLetter',
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
            targets: '.sHero__top .sHero__top__text .heroTextLetter',
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
            duration: 650,
            easing: 'easeOutBounce'
          },
          0
        )
        .add(
          {
            targets: '.sHero__bottom .contentHeadlineLetter',
            translateY: ['30%', '0%'],
            opacity: [0, 1],
            duration: 350,
            delay: anime.stagger(16),
            easing: 'easeOutSine'
          },
          0
        )
        .add(
          {
            targets: '.sHero__bottom .contentTextLetter',
            translateY: ['50%', '0%'],
            opacity: [0, 1],
            duration: 200,
            delay: anime.stagger(8),
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
    }, 0);
  }, []);

  const headline = useMemo(
    () => (
      <>
        <SplitText
          LetterWrapper={({ children }) => <span className="heroHeadlineLetter">{children}</span>}>
          Your
        </SplitText>
        <span className="flashIcon">
          <img src={flash} alt="" />
        </span>
        <span className="word-favorite">
          <SplitText
            LetterWrapper={({ children }) => (
              <span className="heroHeadlineLetter">{children}</span>
            )}>
            favorite
          </SplitText>
        </span>
        <span>&nbsp;</span>
        <SplitText
          LetterWrapper={({ children }) => <span className="heroHeadlineLetter">{children}</span>}>
          companion for your NFT journey
        </SplitText>
      </>
    ),
    []
  );

  const content = useMemo(
    () => (
      <SplitText
        LineWrapper={({ children }) => <span>{children}&nbsp;</span>}
        LetterWrapper={({ children }) => <span className="heroTextLetter">{children}</span>}>
        An innovative browser extension to have all the informations you want accessible quickly.
      </SplitText>
    ),
    []
  );

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

  // const topVisibilityChangeHandler = (isVisible) => {
  // if (isTopAnimated || !isVisible || !ref.current) return;
  //
  // setIsTopAnimated(true);
  // window.scrollTo({
  //   top: ref.current.querySelector('.sHero .sHero__top').offsetTop,
  //   left: 0,
  //   behavior: 'smooth'
  // });
  // timeline.play();
  // };

  const bottomVisibilityChangeHandler = (isVisible) => {
    if (isBottomAnimated || !isVisible || !ref.current) return;

    setIsBottomAnimated(true);
    window.scrollTo({
      top: ref.current.querySelector('.sHero .sHero__bottom').offsetTop - 300,
      left: 0,
      behavior: 'smooth'
    });
    contentTimeline.play();
    logoBoxTimeline.play();
  };

  return (
    <section className="sHero" ref={ref}>
      <HeaderTopBar />

      <div className="sHero__top flex-center">
        <h1> {headline}</h1>
        <div className="sHero__top__text">{content}</div>
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

      <ReactVisibilitySensor
        partialVisibility
        onChange={bottomVisibilityChangeHandler}
        scrollCheck={true}
        active={true}>
        <div className="sHero__bottom">
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
    </section>
  );
};

export default Hero;
