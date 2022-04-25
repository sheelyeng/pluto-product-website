import { useEffect, useState, useMemo, useRef } from 'react';
import anime from 'animejs';
import { SplitText } from '@cyriacbr/react-split-text';
import ReactVisibilitySensor from 'react-visibility-sensor';
import PriceBox from '../../components/PriceBox';

import { pricingData } from '../../assets/data/pricingData';

let timeline = anime.timeline({ autoplay: false });

function Pricing() {
  const ref = useRef();

  const [isAnimated, setIsAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimationApplied, setIsAnimationApplied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      // 29350
      timeline
        .add({
          targets: '.sPricing .pricingHeadlineLetter',
          translateY: ['100%', '0%'],
          opacity: [0, 1],
          duration: 200,
          delay: anime.stagger(20, { start: 500 }),
          easing: 'easeOutSine'
        })
        .add(
          {
            targets: '.sPricing .sPricing__boxes .pricingBox',
            scale: ['0%', '100%'],
            duration: 900,
            delay: anime.stagger(150),
            easing: 'easeOutBounce'
          },
          '-=100'
        );
      setIsAnimationApplied(true);
    }, 0);
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
        LineWrapper={({ children }) => <span>{children}</span>}
        LetterWrapper={({ children }) => <span className="pricingHeadlineLetter">{children}</span>}>
        Pricing Plan
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
      <section className="sPricing" ref={ref}>
        <div className="sPricing__container">
          <h1>{headline}</h1>
          <div className="sPricing__boxes">
            {pricingData.map((item, index) => (
              <PriceBox key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </ReactVisibilitySensor>
  );
}

export default Pricing;
