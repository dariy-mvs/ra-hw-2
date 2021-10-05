import React, { Component } from 'react'
import Toolbar from './Toolbar';
import PortfolioImgItem from './PortfolioImgItem';

const imgArr = [{
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
  category: "Flayers"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
  category: "Flayers"
}]

export default class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      filters: ["All", "Websites", "Flayers", "Business Cards"],
      selectedFilter: 'All'
    }
    this.onSelectFilter = this.onSelectFilter.bind(this);
    this.printArrImg = this.printArrImg.bind(this);
  }

  onSelectFilter (e) {
    const target = e.target;
    const category = target.dataset.categoryBtn;
    this.setState((state) => {return {selectedFilter: category}
  });
    
    
  }

  printArrImg() {
    let newImgArr = [];
    if (this.state.selectedFilter === 'All') {
      newImgArr = imgArr;
    } else {
      newImgArr = imgArr.filter(el => {
        return el.category === this.state.selectedFilter
      });
    }
    newImgArr = newImgArr.map((el, ind) => {
      const keyId = ind + Math.random(); 
      return <PortfolioImgItem src={el.img} key={keyId}/>
    });
    return newImgArr;
  }

  render() {
    return (
      <div>
        <div className="container">
        <Toolbar 
        filters={this.state.filters} 
        selected={this.state.selectedFilter}
        onSelectFilter={this.onSelectFilter}></Toolbar>
        <ul className="img_list">
          {this.printArrImg()}
        </ul> 
      </div>
    </div>
    )
  }
}