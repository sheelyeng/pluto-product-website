import HeaderTopBar from '../../components/HeaderTopBar';
import flash from '../../assets/img/flash-dynamic-gradient.png';
import flashWhite from '../../assets/img/flash-dynamic-gradient-white.png';
import moonGradientWhite from '../../assets/img/moon-front-gradient.png';

function Features() {
  return (
    <section className="sHero">
      <HeaderTopBar />

      <div className="sHero__top flex-center">
        <h1>
          Your
          <span>
            <img src={flash} alt="" />
          </span>
          <span className="word-favorite">favorite</span> companion for your NFT journey
        </h1>
        <p>
          An innovative browser extension to have all the informations you want accessible quickly.
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
      </div>

      <div className="sHero__bottom">
        <div className="sHero__bottom__illustration">
          <div className="sHero__bottom__illustration__logoBox flex-center">
            <img src={moonGradientWhite} alt="Pluto" />
          </div>
          <div className="sHero__bottom__illustration__top">
            <div className="sHero__bottom__illustration__top__rect" />
            <div className="sHero__bottom__illustration__top__circle" />
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
}

export default Features;
