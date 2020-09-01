const express = require('express');
const controller = require('./controller.js');
const router = express.Router();


// router
//   .route('/similar_products')
//   .get(controller.get)


router
.route('/similar_products/:id')
.get(controller.get)

module.exports = router;