const Lalalime = require('./index.js');
const faker = require('faker');
const fs = require('file-system');
const clothing = fs.createWriteStream('megafile1.json');


// data
const price = ['$38.00 USD', '$48.00 USD', '$58.00 USD', '$68.00 USD','$78.00 USD','$88.00 USD','$98.00 USD','$108.00 USD','$118.00 USD','$128.00 USD','$138.00 USD'];
const name = ['F.O.M.O', 'Fast and Free', 'Rule the Day', 'Align', 'Spring Break Away', 'On the Fly', 'Everyday', 'All the Right Places','Sun Setter', 'Ebb to the Street', 'Define', 'All Yours', 'Energy', 'Free to be Serene'];
const type = ['Tanks', 'Pants', 'Dresses', 'Sweaters', 'Skirts', 'Shorts'];
const findCategory = (type) => {
  if(type === 'Tanks' || type === 'Dresses' || type === 'Sweaters') {
    return 'top';
  }
  return 'bottom';
}
///////////////////////////////////// mongo functions ////////////////////////////////////////////
// function randomizer for title
const createTitle = (name) => {
  name.sort(() => Math.random() -0.5);
  return name.slice(0,4);
};

// function randomizer for price
const createPrice = () => {
  let arr = [];
  for (let i = 0; i < 4; i++){
    arr.push(price[Math.floor(Math.random() * Math.floor(price.length))]);
  }
  return arr;
};

const createSimilarProductsLine = (type, index) => {
  let productsLine = {};
  productsLine.index = index;
  productsLine.property = findCategory(type);
  productsLine.type = type;
  productsLine.title = createTitle(name);
  productsLine.price = createPrice();
  productsLine.img = [];
  for (let i = 1; i < 5; i++) {
    let item = [];
    for (let j = 1; j < 3; j++) {
      let colors = [];
      colors.push(`color${j}`);
      colors.push(faker.image.fashion());
      colors.push(faker.image.fashion());
      item.push(colors);
    }
    productsLine.img.push(item);
  }
  return productsLine;
};

function writeTenMillionTimes(writer, encoding, callback) {
  let i = 1999999;
  let id = 10000001;
  write();
  function write() {
    let ok = true;
    do {
      // for postgreSQL csv version
      // let header = "id, property, type, title, price" + "\n";

      if (i === 1999999) {
        // // creating an entry with a random type i.e. "Shorts", "Pants", etc.
        // const data = JSON.stringify(createSimilarProductsLine(type[Math.floor(Math.random() * Math.floor(type.length))], i + 11)) + ',\n';

        // creating an entry with a specific type i.e. "Shorts"
        const data = JSON.stringify(createSimilarProductsLine("Sweaters", id)) + ',\n';
        ok = writer.write('[' + data, encoding)
      }
      i--;
      id++;
      // // creating an entry with a random type i.e. "Shorts", "Pants", etc.
      // const data = JSON.stringify(createSimilarProductsLine(type[Math.floor(Math.random() * Math.floor(type.length))], i + 11)) + ',\n';

      // creating an entry with a specific type i.e. "Shorts"
      const data = JSON.stringify(createSimilarProductsLine("Sweaters", id)) + ',\n';
      if (i === 0) {
        // Last time!
        console.log('you are free!');
        writer.write((data.slice(0, -2) + ']'), encoding, callback);
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // Had to stop early!
      // Write some more once it drains.
      writer.once('drain', write);
    }
  }
}
// writeTenMillionTimes(clothing, 'utf-8', () => clothing.end());

// import command for mongo data
// mongoimport -d lalalime -c similarproducts --file megafile1.json --jsonArray

///////////////////////////////////// postgreSQL functions ////////////////////////////////////////////

// function randomizer for title (only one item)
const createTitleForOne = (name) => {
  name.sort(() => Math.random() -0.5);
  return name[0];
};

// function randomizer for price (only one item)
const createPriceForOne = () => {
  return price[Math.floor(Math.random() * Math.floor(price.length))];
};

const createSimilarProduct = (type) => {
  var resultString = `${findCategory(type)}, ${type}, ${createTitleForOne(name)}, ${createPriceForOne()}`;
  return resultString;
};

const createSimilarProductImg = (index, colorIndex) => {
  let resultString = `${faker.image.image()}, color${colorIndex}, ${index}`;
  return resultString;
}

//////////////////////////////////// creating product data ///////////////////////////////////////////


const production = fs.createWriteStream('production6.csv');

function writeTenMillionTimesPSQLproducts(writer, encoding, callback) {
  let i = 1999999;
  write();
  function write() {
    let ok = true;
    do {
      // for postgreSQL csv version
      // let header = "id, property, type, title, price" + "\n";
      let header = "property, type, title, price" + "\n";
      if (i === 1999999) {

        // creating an entry with a specific type i.e. "Shorts"
        ok = writer.write(header, encoding)
        const data = createSimilarProduct("Sweaters") + '\n';
        ok = writer.write(data, encoding)
      }
      i--;

      // creating an entry with a specific type i.e. "Shorts"
      const data = createSimilarProduct("Sweaters") + '\n';
      if (i === 0) {
        // Last time!
        console.log('you are free!');
        writer.write((data.slice(0, -2)), encoding, callback);
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // Had to stop early!
      // Write some more once it drains.
      writer.once('drain', write);
    }
  }
}

// writeTenMillionTimesPSQLproducts(production, 'utf-8', () => production.end());

// \copy products (property, type, title, price) from production1.csv DELIMITER ',' CSV HEADER;


//////////////////////////////////// creating image data ///////////////////////////////////////////

const imageProduction = fs.createWriteStream('imageProduction6.csv');

function writeTenMillionTimesPSQLimg(writer, encoding, callback) {
  let i = 1999999;
  let id = 10000001;
  write();
  function write() {
    let ok = true;
    do {
      // for postgreSQL csv version of the product
      // let header = "id, property, type, title, price" + "\n";
      // for postgreSQL csv version of the image
      let header = "imgurl, color, productID" + "\n";
      if (i === 1999999) {
        // for product
        // ok = writer.write(header, encoding);
        // writer.once('drain', write);
        // const data = createSimilarProduct("Shorts", id) + '\n';
        // ok = writer.write(data, encoding);

        // for image
        ok = writer.write(header, encoding);
        writer.once('drain', write);
        for (let i = 1; i < 3; i++) {
          const data = createSimilarProductImg(id, i) + '\n';
          ok = writer.write(data, encoding);
          ok = writer.write(data, encoding);
        }

      }
      i--;
      id++;
      // creating an entry for products
      // const data = createSimilarProduct("Shorts", id) + '\n';
      // create an entry for images

      if (i === 0) {
        // Last time!
        console.log('you are free!');
        for (let i = 1; i < 3; i++) {
          let data = createSimilarProductImg(id, i) + '\n';
          writer.write(data, encoding);
          writer.write(data, encoding);
          }
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        for (let i = 1; i < 3; i++) {
          let data = createSimilarProductImg(id, i) + '\n';
          ok = writer.write(data, encoding);
          ok = writer.write(data, encoding);
        }
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // Had to stop early!
      // Write some more once it drains.
      writer.once('drain', write);
    }
  }
}
writeTenMillionTimesPSQLimg(imageProduction, 'utf-8', () => imageProduction.end());

// \copy images (imgurl, color, productID) from imageProduction1.csv DELIMITER ',' CSV HEADER;



////////////////////////////////////////////// seeding data /////////////////////////////////////////////////
// const insertData = () => {
//   Lalalime.insertMany(combineProducts())
//   .then(() => console.log('db seeded'))
//   .catch((err) => console.log('seed err', err))
// }

// insertData();




// decrease the number of colors to 1 or 2 and move it up to the next level

//create product function
// const createSimilarProductsLine = (property, type) => {
//   let productsLine = {};
//   productsLine.property = property;
//   productsLine.type = type;
//   productsLine.title = createTitle(name);
//   productsLine.price = createPrice();
//   productsLine.img = [];
//   for (let i = 1; i < 5; i++) {
//     let item = [];
//     for (let j = 1; j < 6; j++) {
//       let colors = [];
//       colors.push(`color${j}`);
//       colors.push(faker.image.fashion());
//       colors.push(faker.image.fashion());
//       colors.push(faker.image.fashion());
//       item.push(colors);
//     }
//     productsLine.img.push(item);
//   }
//   return productsLine;
// };

// const combineProducts = () => {
//   let allProducts = [];
//   for (let i = 0; i < 1; i++) {
//     allProducts.push(createSimilarProductsLine('bottom', 'Shorts'));
//     // allProducts.push(createSimilarProductsLine('bottom', 'Pants'));
//     // allProducts.push(createSimilarProductsLine('bottom', 'Skirts'));
//     // allProducts.push(createSimilarProductsLine('top', 'Dresses'));
//     // allProducts.push(createSimilarProductsLine('top', 'Tanks'));
//     // allProducts.push(createSimilarProductsLine('top', 'Sweaters'));
//   }
//   return allProducts;
// };
