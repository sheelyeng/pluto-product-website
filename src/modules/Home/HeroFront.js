import React, { useEffect, useMemo } from 'react';
import anime from 'animejs';
import { SplitText } from '@cyriacbr/react-split-text';

import flash from '../../assets/img/flash-dynamic-gradient.png';
import flashWhite from '../../assets/img/flash-dynamic-gradient-white.png';

const HeroFront = () => {
  const timeline = anime.timeline({ autoplay: true });

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
    }, 0);
  }, []);

  const headline = useMemo(() => {
    let data = (
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
              <span className={`heroHeadlineLetter letter-${children}`} text={children}>
                <span>{children}</span>
              </span>
            )}>
            favorite
          </SplitText>
        </span>
        <span>&nbsp;</span>
        <SplitText
          LineWrapper={({ children }) => (
            <span className="d-inline headlineTextLine">{children}</span>
          )}
          LetterWrapper={({ children }) => <span className="heroHeadlineLetter">{children}</span>}>
          companion for your NFT journey
        </SplitText>
      </>
    );

    console.log(data);

    return data;
  }, []);

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

  return (
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
  );
};

export default HeroFront;
