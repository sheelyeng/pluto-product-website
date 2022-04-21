import PropTypes from 'prop-types';

function FeatureSlide({ title, icon }) {
  return (
    <div className="featureSlide">
      <img src={icon} alt="" />
      <h4>{title}</h4>
      <div className="circleSeparator" />
    </div>
  );
}

FeatureSlide.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.any
};

export default FeatureSlide;
