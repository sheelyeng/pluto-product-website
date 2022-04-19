import moonGradientWhite from '../assets/img/moon-front-gradient.png';
import discord from '../assets/img/discord.png';
import twitter from '../assets/img/twitter.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h3>Pluto, a browser extension for all your NFT needs.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="footer__bottom">
          <img src={moonGradientWhite} alt="" className="footer__bottom__logo" />
          <h5>© {new Date().getFullYear()} Pluto. All Rights Reserved. </h5>
          <div className="footer__bottom__links">
            <a href="#">
              <img src={discord} alt="" className="discordImg" />
            </a>
            <a href="#">
              <img src={twitter} alt="" className="twitterImg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
