import tick from '../assets/img/search-Product-Icons.png';

function PricingBox() {
  return (
    <div className="pricingBox">
      <div className="pricingBox__content">
        <h2>Free Plan</h2>
        <div className="pricingBox__content__list">
          <div className="pricingBox__content__list__item">
            <img src={tick} alt="tick" />
            <h4>Feature 1</h4>
          </div>
          <div className="pricingBox__content__list__item">
            <img src={tick} alt="tick" />
            <h4>Feature 1</h4>
          </div>
          <div className="pricingBox__content__list__item disabled">
            <img src={tick} alt="tick" />
            <h4>Feature 1</h4>
          </div>
          <div className="pricingBox__content__list__item disabled">
            <img src={tick} alt="tick" />
            <h4>Feature 1</h4>
          </div>
        </div>
        <a href="#" className="btn btn--primary">
          Download
        </a>
      </div>
      <div className="pricingBox__price">
        <h5>Free</h5>
      </div>
    </div>
  );
}

export default PricingBox;
