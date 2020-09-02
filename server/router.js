const express = require('express');
const controller = require('./controller.js');
const router = express.Router();


// router
//   .route('/similar_products')
//   .get(controller.get)


router
.route('/similar_products/:id')
.get(controller.get)

router
  .route('/post_product')
  .post(controller.postProduct)

router
  .route('/post_image')
  .post(controller.postImage)

router
  .route('/oneProduct/:id')
  .delete(controller.deleteProduct)
  .put(controller.updateProduct)

router
  .route('/oneImage/:id')
  .delete(controller.deleteProduct)
  .put(controller.updateImage)


module.exports = router;