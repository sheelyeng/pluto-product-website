import { useEffect, useState } from 'react';
import anime from 'animejs';
import { SplitText } from '@cyriacbr/react-split-text';

import moonGradient from '../assets/img/moon-front-gradient-colored.png';
import arrow from '../assets/img/arrow-white.png';

const DELTA = 100;
const navbarHeight = 125;

function HeaderTopBar() {
  const [lastScrollTop, setLastScrollTop] = useState(window.scrollY);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const timeline = anime.timeline({ autoplay: true });
      timeline
        .add({
          targets: '.topBar',
          scaleX: ['0%', '100%'],
          duration: 700,
          easing: 'easeOutSine'
        })
        .add({
          targets: '.topBar h5 .topBarWord',
          translateY: ['100%', '0%'],
          opacity: [0, 1],
          duration: 750,
          delay: anime.stagger(20, { start: 150 }),
          easing: 'easeOutQuart'
        })
        .add(
          {
            targets: '.topBar h5 img',
            translateX: ['-100%', '0%'],
            opacity: [0, 1],
            duration: 150,
            easing: 'easeOutQuart'
          },
          '-=300'
        )
        .add(
          {
            targets: '.topBar .topBar__logo',
            opacity: [0, 1],
            duration: 500,
            easing: 'easeInSine'
          },
          1000
        );
    }, 0);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });
  const handleScroll = () => {
    const st = window.scrollY;

    // Make sure they scroll more than DELTA
    if (Math.abs(lastScrollTop - st) <= DELTA) return;

    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down - Hide Nav
      setShowNav(false);
    } else {
      // Scroll Up - Show Nav
      if (st + window.outerHeight < document.documentElement.scrollHeight) {
        setShowNav(true);
      }
    }

    setLastScrollTop(st);
  };

  return (
    <div className={`topBar ${showNav ? 'showNav' : 'hideNav'}`}>
      <img src={moonGradient} alt="Pluto" className="topBar__logo" />
      <a href="#" className="topBar__link">
        <SplitText LetterWrapper={({ children }) => <span className="topBarWord">{children}</span>}>
          Get Started
        </SplitText>
        <div className="imgCont">
          <img src={arrow} alt="arrow" />
        </div>
      </a>
    </div>
  );
}
export default HeaderTopBar;
