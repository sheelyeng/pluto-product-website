import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'rc-tooltip';
import FeatureTooltip from './FeatureTooltip';
import ReactFreezeframe from 'react-freezeframe';

function FeatureBox({
  title,
  isScreenMD = false,
  isPremiumBoxes = false,
  boxName = '',
  gif = '',
  icon
}) {
  const ref = useRef();

  const startAnimation = () => {
    if (ref.current) ref.current.start();
  };

  const stopAnimation = () => {
    if (ref.current) ref.current.stop();
  };

  return (
    <Tooltip
      placement={isScreenMD || isPremiumBoxes ? 'bottomLeft' : 'bottom'}
      trigger={['hover']}
      mouseLeaveDelay={0}
      mouseEnterDelay={0.1}
      overlay={<FeatureTooltip title={title} />}>
      <div
        className={`featureBox box-${boxName}`}
        onMouseEnter={startAnimation}
        onTouchStart={startAnimation}
        onTouchEnd={stopAnimation}>
        <div className="featureBox__imgBox featureBoxIcon">
          {gif ? (
            <ReactFreezeframe ref={ref} src={gif} options={{ trigger: false }} />
          ) : (
            <img src={icon} alt="" />
          )}
        </div>

        <h3>{title}</h3>
      </div>
    </Tooltip>
  );
}

FeatureBox.propTypes = {
  title: PropTypes.string,
  boxName: PropTypes.string,
  icon: PropTypes.string,
  gif: PropTypes.string,
  isTextLg: PropTypes.bool,
  isScreenMD: PropTypes.bool,
  isPremiumBoxes: PropTypes.bool
};

export default FeatureBox;
