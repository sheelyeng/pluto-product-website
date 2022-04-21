import PriceBox from '../../components/PriceBox';
import { pricingData } from '../../assets/data/pricingData';

function Pricing() {
  return (
    <section className="sPricing">
      <div className="sPricing__container">
        <h1>Pricing Plan</h1>
        <div className="sPricing__boxes">
          {pricingData.map((item, index) => (
            <PriceBox key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
