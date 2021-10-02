import React, { Component } from 'react';
import 'material-design-icons';
import IconSwitch from './IconSwitch';
import './Layout.css';

const products = [{
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "blue",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
  name: "Nike free run",
  price: "170",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
  name: "Nike Metcon 3",
  price: "150",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];

const itemsList = products.map((el, ind) => {
  return <li className="product" key={ind}>
    <span className="product__name">{el.name}</span>
    <span className="product__color">{el.color}</span>
    <img className="product_img" src={el.img} alt="product" />
    <span className="product_price">{el.price}$</span>
    <button className="product_btn">Add to Card</button>
  </li>
})

export default class Layout extends Component {
  constructor() {
    super();
    this.state = {
      icon: 'view_module',
    }
    this.changeIcon = this.changeIcon.bind(this);
  }
  changeIcon() {
    if (this.state.icon === 'view_module') {
      this.setState({icon: 'view_list'})
    } else {
      this.setState({icon: 'view_module'})
    }
    
  }
  render() {
    let {icon} = this.state
    return (
      <div>
        <div className="container layout">
        <IconSwitch icon={icon} onSwitch={this.changeIcon}/>
        <ul className={`${icon} products__list`}>
          {itemsList}
        </ul>
        </div>
      </div> 
    )
  }
}
