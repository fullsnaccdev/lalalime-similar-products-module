const express = require('express');
const dbHelpers = require('../database/dbHelpers.js');

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
    dbHelpers.get(req, (err, results) => {
      if (err) {
        console.log(err);
        res.status(404).send(err)
      }
      // let productList = {};
      // productList.id = [];
      // productList.title = [];
      // productList.price = [];
      // productList.img = [];
      // let img;
      // let color = [];
      // let colorContainer = [];
      // results = results.rows
      // for (let i = 0; i < results.length; i++) {
      //   if (i === 0 || i === 6 || i === 12 || i === 18) {
      //     productList.id.push(results[i].productid);
      //     productList.title.push(results[i].title);
      //     productList.price.push(results[i].price);
      //     colorContainer = [];
      //   }
      //   if (color.length < 1) {
      //     color.push(results[i].color)
      //   }
      //   color.push(results[i].imgurl);
      //   if (color.length === 4) {
      //     colorContainer.push(color);
      //     color = [];
      //   }
      //   if (colorContainer.length === 2) {
      //     productList.img.push(colorContainer)
      //   }
      // }
      res.status(200).send(results)
    })
  },
  postProduct: (req, res) => {
    dbHelpers.postProduct(req, (err, result) => {
      if(err) {
        res.status(400).send(err);
      }
      res.status(200).send(result);
    })
  },
  postImage: (req, res) => {
    dbHelpers.postImage(req, (err, result) => {
      if(err) {
        res.status(400).send(err);
      }
      res.status(200).send(result);

    })
  },
  deleteProduct: (req, res) => {
    dbHelpers.deleteProduct(req, (err, result) => {
      if(err) {
        res.status(400).send(err);
      }
      res.status(200).send(result);
    })
  },
  deleteImage: (req, res) => {
    dbHelpers.deleteImage(req, (err, result) => {
      if(err) {
        res.status(400).send(err);
      }
      res.status(200).send(result);
    })
  },
  updateProduct: (req, res) => {
    dbHelpers.updateProduct(req, (err, result) => {
      if(err) {
        res.status(400).send(err);
      }
      res.status(200).send(result);
    })
  },
  updateImage: (req, res) => {
    dbHelpers.updateImage(req, (err, result) => {
      if(err) {
        res.status(400).send(err);
      }
      res.status(200).send(result);
    })
  },

}

module.exports = controller;