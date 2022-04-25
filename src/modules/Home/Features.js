import { useEffect, useState, useRef, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import anime from 'animejs';
import { SplitText } from '@cyriacbr/react-split-text';
import ReactVisibilitySensor from 'react-visibility-sensor';

import FeatureBox from '../../components/FeatureBox';

import 'swiper/css';

import { freeTools, premiumTools } from '../../assets/data/toolsData';

let timeline = anime.timeline({ autoplay: false });

const Features = () => {
  const ref = useRef();

  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [isAnimationApplied, setIsAnimationApplied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      timeline = anime.timeline({ autoplay: false });

      //16350
      timeline
        .add({
          targets: '.sFeatures .featuresHeadlineLetter',
          translateY: ['30%', '0%'],
          opacity: [0, 1],
          duration: 400,
          delay: anime.stagger(20, { start: 500 }),
          easing: 'easeOutSine'
        })
        .add(
          {
            targets: '.sFeatures .featuresSubHeadlineLetter',
            translateY: ['100%', '0%'],
            opacity: [0, 1],
            duration: 200,
            delay: anime.stagger(30),
            easing: 'easeOutSine'
          },
          550
        )
        .add(
          {
            targets: '.sFeatures .sFeatures__section__boxes .featureBox',
            translateY: ['10%', '0%'],
            opacity: [0, 1],
            duration: 350,
            delay: anime.stagger(150),
            easing: 'easeOutSine'
          },
          500
        )
        .add(
          {
            targets: '.sFeatures .sFeatures__section__divider',
            scaleX: ['0%', '100%'],
            duration: 500,
            delay: anime.stagger(1000),
            easing: 'easeOutSine'
          },
          1000
        );
      setIsAnimationApplied(true);
    }, 0);
  }, [isMobile]);

  useEffect(() => {
    if (window.outerWidth <= 500) setIsMobile(true);
  }, []);

  useEffect(() => {
    animateSection();
  }, [isAnimated, isVisible, isAnimationApplied]);

  const animateSection = () => {
    if (isAnimated || !isVisible || !ref.current || !isAnimationApplied) return;
    setIsAnimated(true);
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
    timeline.play();
  };

  const visibilityChangeHandler = (isVisible) => {
    setIsVisible(isVisible);
  };

  const headline = useMemo(
    () => (
      <SplitText
        LetterWrapper={({ children }) => (
          <span className="featuresHeadlineLetter">{children}</span>
        )}>
        Features
      </SplitText>
    ),
    []
  );

  const subheadline1 = useMemo(
    () => (
      <SplitText
        LineWrapper={({ children }) => <span>{children}</span>}
        LetterWrapper={({ children }) => (
          <span className="featuresSubHeadlineLetter">{children}</span>
        )}>
        Free Tools
      </SplitText>
    ),
    []
  );

  const subheadline2 = useMemo(
    () => (
      <SplitText
        LineWrapper={({ children }) => <span>{children}</span>}
        LetterWrapper={({ children }) => (
          <span className="featuresSubHeadlineLetter">{children}</span>
        )}>
        Premium Tools
      </SplitText>
    ),
    []
  );

  return (
    <ReactVisibilitySensor
      partialVisibility
      minTopValue={300}
      onChange={visibilityChangeHandler}
      scrollCheck={true}
      active={true}>
      <section className="sFeatures" ref={ref}>
        <div className="sFeatures__noiseBg" />
        <div className="sFeatures__container">
          <h1>{headline}</h1>
          <div className="sFeatures__section">
            <h2>{subheadline1}</h2>
            <div className="sFeatures__section__divider" />
            <div className="sFeatures__section__boxes">
              {!isMobile && freeTools.map((feat, index) => <FeatureBox key={index} {...feat} />)}

              {isMobile && (
                <div className="sFeatures__section__boxes__slider">
                  <FreeToolsSlider />
                </div>
              )}
            </div>
          </div>
          <div className="sFeatures__section">
            <h2>{subheadline2}</h2>

            <div className="sFeatures__section__divider" />
            <div className="sFeatures__section__boxes">
              {!isMobile && premiumTools.map((feat, index) => <FeatureBox key={index} {...feat} />)}

              {isMobile && (
                <div className="sFeatures__section__boxes__slider premiumSlider">
                  <PremiumToolsSlider />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </ReactVisibilitySensor>
  );
};

const FreeToolsSlider = () => (
  <Swiper slidesPerView={1.408} spaceBetween={37} loop centeredSlides>
    {freeTools.map((feat, index) => (
      <SwiperSlide key={index}>
        <FeatureBox key={index} {...feat} />
      </SwiperSlide>
    ))}
  </Swiper>
);

const PremiumToolsSlider = () => (
  <Swiper slidesPerView={1.33} spaceBetween={41} loop>
    {premiumTools.map((feat, index) => (
      <SwiperSlide key={index}>
        <FeatureBox key={index} {...feat} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default Features;
