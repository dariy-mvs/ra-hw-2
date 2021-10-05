import React from 'react'
import { PropTypes } from 'prop-types';
export default function PortfolioImgItem(props) {

  return (
    <li className="img_item"><img src={props.src} alt="img" className="img" /></li>
  )
}

PortfolioImgItem.propTypes = {
  src: PropTypes.string
}