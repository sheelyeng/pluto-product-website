import PropTypes from 'prop-types';

function FeatureBox({ title, icon, isTextLg }) {
  return (
    <div className={`featureBox ${isTextLg ? 'spacingSm' : ''}`}>
      <img src={icon} alt="" />
      <h3>{title}</h3>
    </div>
  );
}

FeatureBox.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.any,
  isTextLg: PropTypes.bool
};

export default FeatureBox;
