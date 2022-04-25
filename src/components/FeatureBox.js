import React from 'react';
// import 'rc-tooltip/assets/bootstrap_white.css';
import PropTypes from 'prop-types';
import Tooltip from 'rc-tooltip';
import FeatureTooltip from './FeatureTooltip';

function FeatureBox({ title, icon }) {
  return (
    // <div className={`featureBox ${isTextLg ? 'spacingSm' : ''}`}>
    // <Tooltip placement="bottom" overlay={<FeatureTooltip title={title} />}>
    <Tooltip placement="bottom" trigger={['click']} overlay={<FeatureTooltip title={title} />}>
      <div className={`featureBox`}>
        <img src={icon} alt="" />
        <h3>{title}</h3>
      </div>
    </Tooltip>
  );
}

FeatureBox.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.any,
  isTextLg: PropTypes.bool,
  id: PropTypes.string
};

export default FeatureBox;
