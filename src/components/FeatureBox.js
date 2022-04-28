import React from 'react';
// import 'rc-tooltip/assets/bootstrap_white.css';
import PropTypes from 'prop-types';
import Tooltip from 'rc-tooltip';
import FeatureTooltip from './FeatureTooltip';

function FeatureBox({ title, icon, isScreenMD = false, isPremiumBoxes = false }) {
  return (
    // <div className={`featureBox ${isTextLg ? 'spacingSm' : ''}`}>
    // <Tooltip placement="bottom" overlay={<FeatureTooltip title={title} />}>
    <Tooltip
      placement={isScreenMD || isPremiumBoxes ? 'bottomLeft' : 'bottom'}
      trigger={['hover']}
      // transitionName="rc-tooltip-zoom"
      mouseLeaveDelay={0}
      mouseEnterDelay={0.1}
      overlay={<FeatureTooltip title={title} />}>
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
  isScreenMD: PropTypes.bool,
  isPremiumBoxes: PropTypes.bool
};

export default FeatureBox;
