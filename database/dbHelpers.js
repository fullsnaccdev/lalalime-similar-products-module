// const LalaLime = require('./index.js');

// const getProducts = () => {
//   return LalaLime.find({property:'bottom'});
// }

// module.exports = getProducts;

//////////////////// postgresql /////////////////////

const db = require('./index');

const dbHelpers = {
  get: (req, callback) => {
    // normally pass the id
    let { id } = req.params;

    // for stress testing, randomizing the id so that the endpoint is different every time
    // let id = Math.floor(Math.random * 12000000 + 1);
    console.log('dbhelpers', id);
    let queryString = `SELECT * FROM products, images WHERE products.id = ${Number(id)} AND images.productid = ${Number(id)} OR products.id = ${Number(id) + 1} AND images.productid = ${Number(id) + 1} OR products.id = ${Number(id) + 2} AND images.productid = ${Number(id) + 2} OR products.id = ${Number(id) + 3} AND images.productid = ${Number(id) + 3};`;
    db.query(queryString, (err, results) => {
      if (err) {
        console.log(err);
      }
      console.log('db results',results);
      callback(null, results);
    })
  },
  postProduct: (req, callback) => {
    let { property, type, title, price } = req.body;
    let queryString = `INSERT INTO products (property, type, title, price) VALUES ('${property}', '${type}', '${title}', '${price}')`;
    db.query(queryString, (err, result) => {
      if (err) {
        callback(err);
      }
      callback(null, result);
    })
  },
  postImage: (req, callback) => {
    let { imgurl, color, productID } = req.body;
    let queryString = `INSERT INTO images (imgurl, color, productid) VALUES ('${imgurl}', '${color}', '${productID}')`;
    db.query(queryString, (err, result) => {
      if (err) {
        callback(err);
      }
      callback(null, result);
    })
  },
  update: (req, callback) => {

    let queryString = ``;

  },
  deleteProduct: (req, callback) => {
    let { id } = req.params;
    let queryString = `DELETE FROM products WHERE id = ${id}`;
    db.query(queryString, (err, result) => {
      if (err) {
        callback(err);
      }
      callback(null, result);
    })
  },
  deleteImage: (req, callback) => {
    let { id } = req.params;
    let queryString = `DELETE FROM images WHERE id = ${id}`;
    db.query(queryString, (err, result) => {
      if (err) {
        callback(err);
      }
      callback(null, result);
    })
  },
  updateProduct: (req, callback) => {
    let { id } = req.params;
    let { property, type, title, price } = req.body;
    let queryString = `UPDATE products SET property = '${property}', type = '${type}', title = '${title}', price = '${price}' WHERE id = ${id}`;
    db.query(queryString, (err, result) => {
      if (err) {
        callback(err);
      }
      callback(null, result);
    })
  },
  updateImage: (req, callback) => {
    let { id } = req.params;
    let { imgurl, color, productID } = req.body;
    let queryString = `UPDATE images SET imgurl = '${imgurl}', color = '${color}', productid = '${productID}' WHERE id = ${id}`;
    db.query(queryString, (err, result) => {
      if (err) {
        callback(err);
      }
      callback(null, result);
    })
  },

}
module.exports = dbHelpers;