// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// mongoose.connect('mongodb://localhost:27017/products', { useNewUrlParser: true })
// .then(() => console.log('db connected'))
// .catch((err) => console.log('db not connected'))

// const Products = new Schema({
//   property: String,
//   type: String,
//   title: [String],
//   price: [String],
//   img: [[[String]]]
// })

// const Lalalime = mongoose.model('LalaLime', Products )

// module.exports = Lalalime;


//////////////////////////////////////// mongoDB connection ////////////////////////////////////////
// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
// // Connection URL
// const url = 'mongodb://localhost:27017/lalalime';

// // Use connect method to connect to the server
// MongoClient.connect(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }, (err, client) => {
//   assert.equal(null, err);
//   const db = client.db('lalalime');
// })

/////////////////////////////////////// psql connection /////////////////////////////////////////
const { Client } = require('pg');
client = new Client({
  host: 'localhost',
  user: 'jameskim',
  password: '',
  database: 'lalalime',
  post: 3003
});
client.connect(err => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('postgres connected')
  }
});
module.exports = client;