// const LalaLime = require('./index.js');

// const getProducts = () => {
//   return LalaLime.find({property:'bottom'});
// }

// module.exports = getProducts;

//////////////////// postgresql /////////////////////

const db = require('./index');

const dbHelpers = {
  get: (req, callback) => {
    let { id } = req.params;
    let queryString = `SELECT * FROM products, images WHERE products.id = ${Number(id)} AND images.productid = ${Number(id)} OR products.id = ${Number(id) + 1} AND images.productid = ${Number(id) + 1} OR products.id = ${Number(id) + 2} AND images.productid = ${Number(id) + 2} OR products.id = ${Number(id) + 3} AND images.productid = ${Number(id) + 3};`;
    db.query(queryString, (err, results) => {
      if (err) {
        console.log(err);
      }
      callback(null, results);
    })
  }
}
module.exports = dbHelpers;