import PropTypes from 'prop-types';

import tick from '../assets/img/search-Product-Icons.png';

function PricingBox({ price, recurring, title, features }) {
  return (
    <div className="pricingBox">
      <div className="pricingBox__content">
        <h2>{title}</h2>
        <div className="pricingBox__content__list">
          {features.map((item, index) => (
            <div
              key={index}
              className={`pricingBox__content__list__item ${item.isDisabled ? 'disabled' : ''}`}>
              <img src={tick} alt="tick" />
              <h4>{item.title}</h4>
            </div>
          ))}
        </div>
        <a href="#" className="btn btn--primary">
          Download
        </a>
      </div>
      <div className="pricingBox__price">
        <h5>{price}</h5>
        {recurring !== '' && (
          <>
            <span>&nbsp;/&nbsp;</span>
            <h5 className="text-light-opacity">per {recurring}</h5>
          </>
        )}
      </div>
    </div>
  );
}

PricingBox.propTypes = {
  price: PropTypes.string,
  recurring: PropTypes.string,
  title: PropTypes.string,
  features: PropTypes.array
};

export default PricingBox;
