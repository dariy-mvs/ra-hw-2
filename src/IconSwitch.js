import React from 'react';
import { PropTypes } from 'prop-types';

export default function IconSwitch(props) {
  const { icon, onSwitch } = props
  return (
    <div>
      <div className="view_icon">
           <span className="material-icons" onClick={onSwitch}>{icon}</span>
         </div>
    </div>
  )
}

IconSwitch.propTypes = {
  onSwitch: PropTypes.func, 
  icon: PropTypes.string,
};