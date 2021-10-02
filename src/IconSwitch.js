import React, { Component } from 'react'
import { PropTypes } from 'prop-types';

export default class IconSwitch extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const { icon, onSwitch } = this.props
    return (
      <div>
        <div className="view_icon">
          <span className="material-icons" onClick={onSwitch}>{icon}</span>
        </div>
      </div>
    )
  }
}

IconSwitch.propTypes = {
  onSwitch: PropTypes.func, 
  icon: PropTypes.string,
};