import React from 'react';
import PropTypes from 'prop-types';
import './portfolio.css';

export default function Toolbar(props) {
  const filters = props.filters;
  const filtersList = filters.map((el,ind) => {
    return <li key={ind} className="btn_item" data-category-btn={el} onClick={props.onSelectFilter}>{el}</li> });


  return (
    <div>
     <ul className="btn_list">
       {filtersList}
     </ul>
    </div>
  )
}



Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  onSelectFilter: PropTypes.func, 
  selected: PropTypes.string,
};