const Lalalime = require('./index.js');
const faker = require('faker');
const fs = require('file-system');
const clothing = fs.createWriteStream('megafile.json');

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

const createSimilarProductsLine = (type) => {
  let productsLine = {};
  productsLine.property = findCategory(type);
  productsLine.type = type;
  productsLine.title = createTitle(name);
  productsLine.price = createPrice();
  productsLine.img = [];
  for (let i = 1; i < 5; i++) {
    productsLine.img.push(faker.image.fashion());
  }
  return productsLine;
};

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

// const createProducts = () => {
//   return createSimilarProductsLine(type[Math.floor(Math.random() * Math.floor(type.length))]);
// };

// const insertMockData = () => {
//   let mockProducts = combineProducts();

//   mockProducts = mockProducts.map((entry) => (JSON.stringify(entry) + '\n').join('')) // currently, item is an array of 120 entries, each with 4 products and each product has 15 images

//   fs.writeFile('bulk.csv', mockProducts, (err) => {
//     if(err) {
//       console.log('nice try')
//     }
//     console.log('nice job');
//   });
// };

function writeTenMillionTimes(writer, encoding, callback) {
  let i = 4000000;
  write();
  function write() {
    let ok = true;
    do {
      if (i === 4000000) {
        const data = JSON.stringify(createSimilarProductsLine(type[Math.floor(Math.random() * Math.floor(type.length))])) + ',\n';
        ok = writer.write('[' + data, encoding)
      }
      i--;
      const data = JSON.stringify(createSimilarProductsLine(type[Math.floor(Math.random() * Math.floor(type.length))])) + ',\n';
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
writeTenMillionTimes(clothing, 'utf-8', () => clothing.end());

// mongoimport -d products -c lalalimes --file megafile.json --jsonArray

// seeding data
// const insertData = () => {
//   Lalalime.insertMany(combineProducts())
//   .then(() => console.log('db seeded'))
//   .catch((err) => console.log('seed err', err))
// }

// insertData();

