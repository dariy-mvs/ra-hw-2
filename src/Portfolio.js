import React, { Component } from 'react'
import Toolbar from './Toolbar';
import jpg200 from './img/200.jpg';
import codystretch from './img/codystretch.jpg';
import dia from './img/dia.jpg';
import emi_haze from './img/emi_haze.jpg';
import mon from './img/mon.jpg';
import place200x290_1 from './img/place200x290_1.png';
import place200x290_2 from './img/place200x290_2.png';
import place200x290_3 from './img/place200x290_3.png';
import place200x290 from './img/place200x290.png';
import the_ninetys_brand from './img/the_ninetys_brand.jpg';
import transmission from'./img/transmission.jpg';
import triangle_003 from './img/Triangle_003.jpg';
import triangle_350x197_1 from './img/Triangle_350x197_1.jpg';
import Triangle_350x197 from './img/Triangle_350x197.jpg';

export default class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      filters: ["All", "Websites", "Flayers", "Business Cards"],
      selectedFilter: '',
      onSelectFilter: (e) => {
        let target = e.target;
        [...target.closest('.btn_list').querySelectorAll('.btn_item')].forEach(el => el.classList.remove('active'));
        target.classList.add('active');
        let category = target.dataset.categoryBtn;
        this.state.selectedFilter = category;
        [...document.querySelectorAll('.img_item')].forEach(el => el.classList.remove('hidden'));
        if (category === 'All') {
          return
        } else {
          [...document.querySelectorAll(`.img_item>:not([data-category="${this.state.selectedFilter}"])`)].forEach(el => { el.closest('.img_item').classList.add('hidden')});
        }
      }
    }
  }

  render() {
    return (
      <div>
        <div className="container">
        <Toolbar 
        filters={this.state.filters} 
        selected={this.state.selectedFilter}
        onSelectFilter={this.state.onSelectFilter}></Toolbar>
        <ul className="img_list">
          <li className="img_item"><img src={jpg200} alt="img" className="img" data-category="Websites" /></li>
          <li className="img_item"><img src={codystretch} alt="img" className="img" data-category="Flayers"/></li>
          <li className="img_item"><img src={dia} alt="img" className="img" data-category="Websites"/></li>
          <li className="img_item"><img src={emi_haze} alt="img" className="img" data-category="Business Cards"/></li>
          <li className="img_item"><img src={mon} alt="img" className="img" data-category="Business Cards"/></li>
          <li className="img_item"><img src={place200x290} alt="img" className="img" data-category="Business Cards"/></li>
          <li className="img_item"><img src={place200x290_1} alt="img" className="img" data-category="Flayers" /></li>
          <li className="img_item"><img src={place200x290_2} alt="img" className="img" data-category="Business Cards"/></li>
          <li className="img_item"><img src={place200x290_3} alt="img" className="img" data-category="Websites"/></li>
          <li className="img_item"><img src={the_ninetys_brand} alt="img" className="img" data-category="Flayers" /></li>
          <li className="img_item"><img src={transmission} alt="img" className="img" data-category="Business Cards"/></li>
          <li className="img_item"><img src={triangle_003} alt="img" className="img" data-category="Websites" /></li>
          <li className="img_item"><img src={triangle_350x197_1} alt="img" className="img" data-category="Flayers" /></li>
          <li className="img_item"><img src={Triangle_350x197} alt="img" className="img" data-category="Websites" /></li>
        </ul> 
      </div>
    </div>
    )
  }
}