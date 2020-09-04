import React, { Component } from 'react';
import axios from 'axios';
import PriceList from './PriceList.js';
import TitleList from './TitleList.js';
import ImgHover from './ImgHover.js';
import '../../dist/style.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      title: [],
      price: [],
      img: [],
      id: window.location.pathname.slice(1, -1)
    }
    this.getComponents = this.getComponents.bind(this);
  }

  componentDidMount(){
    this.getComponents();
  }

  getComponents() {
    axios
    .get(`/api/similar_products/${this.state.id}`)
    .then((res) => {
      // console.log(res.data.rows);
      let productList = {};
      productList.id = [];
      productList.title = [];
      productList.price = [];
      productList.img = [];
      let img;
      let color = [];
      let colorContainer = [];
      let results = res.data.rows
      for (let i = 0; i < results.length; i++) {
        if (i === 0 || i === 6 || i === 12 || i === 18) {
          productList.id.push(results[i].productid);
          productList.title.push(results[i].title);
          productList.price.push(results[i].price);
          colorContainer = [];
        }
        if (color.length < 1) {
          color.push(results[i].color)
        }
        color.push(results[i].imgurl);
        if (color.length === 4) {
          colorContainer.push(color);
          color = [];
        }
        if (colorContainer.length === 2) {
          productList.img.push(colorContainer)
        }
      }
      this.setState({
      title: productList['title'],
      price: productList['price'],
      img: productList['img']
    }, () => console.log('title from app', productList))})
    .catch((err) => console.log('title',err))
  }

  render(){
      return(
        <div className="similar-container">
          <div className="headline-top">
            <h2 className="headline">You may also like</h2>
          </div>
          <ImgHover img={this.state.img}/>
          <TitleList title={this.state.title}/>
          <PriceList price={this.state.price}/>
        </div>
      )
  }
}


export default App;