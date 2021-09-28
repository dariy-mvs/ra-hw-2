import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './portfolio.css';

export default class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.filters = this.props.filters;
    this.filtersList = this.filters.map((el,ind) => {
      return <li key={ind} className="btn_item" data-category-btn={el} onClick={this.props.onSelectFilter}>{el}</li>
    });
  }

  renderToolList() {

  }

  render() {
    return (
      <div>
        <ul className="btn_list">
          {this.filtersList}
        </ul>
      </div>
    )
  }
}


Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  onSelectFilter: PropTypes.func, 
  selected: PropTypes.string,
};