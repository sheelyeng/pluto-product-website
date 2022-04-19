import moonGradient from '../assets/img/moon-front-gradient-colored.png';
import arrow from '../assets/img/arrow-white.png';

function HeaderTopBar() {
  return (
    <div className="topBar">
      <img src={moonGradient} alt="Pluto" className="topBar__logo" />
      <h5>
        <span>Get Started</span>
        <img src={arrow} alt="arrow" />
      </h5>
    </div>
  );
}

export default HeaderTopBar;
