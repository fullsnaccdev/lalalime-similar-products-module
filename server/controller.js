const express = require('express');
const getProducts = require('../database/dbHelpers.js');

// const controller = {
//   get: (req, res) => {
//     getProducts()
//     .then((data) => res.status(200).send(data))
//     .catch((err) => res.status(400).send('get', err))
//   }
// }
///////////////////// postgresql ////////////////////////

const controller = {
  get: (req, res) => {
    getProducts.get(req, (err, results) => {
      if (err) {
        res.status(404).send(err)
      }
      let productList = {};
      productList.id = [];
      productList.title = [];
      productList.price = [];
      productList.img = [];
      let img;
      let color = [];
      let colorContainer = [];
      results = results.rows
      for (let i = 0; i < results.length; i++) {
        if (i === 0 || i === 4 || i === 8 || i === 12) {
          productList.id.push(results[i].productid);
          productList.title.push(results[i].title);
          productList.price.push(results[i].price);
          img = [];
          colorContainer = [];
        }
        if (i % 2 === 0) {
          color.push(results[i].color);
        }
        color.push(results[i].imgurl)
        if (i % 2 === 1) {
          colorContainer.push(color);
          color = [];
        }
        if (i === 3 || i === 7 || i === 11 || i === 15) {
          productList.img.push(colorContainer);
        }
      }
      res.status(200).send(productList)
    })
  }
}

module.exports = controller;