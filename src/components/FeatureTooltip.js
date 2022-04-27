import PropTypes from 'prop-types';

import tick from '../assets/img/tick-white.png';
import toolImg from '../assets/img/tool-image.png';

function FeatureTooltip({ title }) {
  return (
    <div className="featureTooltip">
      <h3 className="featureTooltip__headline">{title}</h3>
      <span className="featureTooltip__divider" />
      <div className="featureTooltip__content">
        <div className="featureTooltip__content__text">
          <div className="featureTooltip__content__text__box">
            <div className="featureTooltip__content__text__box__headline">
              <img src={tick} alt="" />
              <h3>Feature 1</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna.
            </p>
          </div>
          <div className="featureTooltip__content__text__box">
            <div className="featureTooltip__content__text__box__headline">
              <img src={tick} alt="" />
              <h3>Feature 1</h3>
            </div>
          </div>
          <div className="featureTooltip__content__text__box">
            <div className="featureTooltip__content__text__box__headline">
              <img src={tick} alt="" />
              <h3>Feature 1</h3>
            </div>
          </div>
        </div>
        <div className="featureTooltip__content__image">
          <img src={toolImg} alt="tool" />
        </div>
      </div>
    </div>
  );
}

FeatureTooltip.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string
};

export default FeatureTooltip;
