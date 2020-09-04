// this is the new seed file. use this one

const Lalalime = require('./index.js');
const faker = require('faker');
const fs = require('file-system');

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

///////////////////////////////////////////////////////////// creating product data /////////////////////////////////////////////////////////


const production1 = fs.createWriteStream('production1.csv');
const production2 = fs.createWriteStream('production2.csv');
const production3 = fs.createWriteStream('production3.csv');
const production4 = fs.createWriteStream('production4.csv');
const production5 = fs.createWriteStream('production5.csv');
const production6 = fs.createWriteStream('production6.csv');

function writeTwoMillionTimesPSQLproducts(writer, encoding, callback, clothing) {
  let i = 199;
  write();
  function write() {
    let ok = true;
    do {
      // for postgreSQL csv version
      // let header = "id, property, type, title, price" + "\n";
      let header = "property, type, title, price" + "\n";
      if (i === 199) {

        // creating an entry with a specific type i.e. "Shorts"
        ok = writer.write(header, encoding)
        const data = createSimilarProduct(clothing) + '\n';
        ok = writer.write(data, encoding)
      }
      i--;

      // creating an entry with a specific type i.e. "Shorts"
      const data = createSimilarProduct(clothing) + '\n';
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

writeTwoMillionTimesPSQLproducts(production1, 'utf-8', () => production1.end(), "Shorts");
writeTwoMillionTimesPSQLproducts(production2, 'utf-8', () => production2.end(), "Pants");
writeTwoMillionTimesPSQLproducts(production3, 'utf-8', () => production3.end(), "Skirts");
writeTwoMillionTimesPSQLproducts(production4, 'utf-8', () => production4.end(), "Dresses");
writeTwoMillionTimesPSQLproducts(production5, 'utf-8', () => production5.end(), "Tanks");
writeTwoMillionTimesPSQLproducts(production6, 'utf-8', () => production6.end(), "Sweaters");




///////////////////////////////////////////////////////////// creating image data /////////////////////////////////////////////////////////




const imageProduction1 = fs.createWriteStream('imageProduction1.csv');
const imageProduction2 = fs.createWriteStream('imageProduction2.csv');
const imageProduction3 = fs.createWriteStream('imageProduction3.csv');
const imageProduction4 = fs.createWriteStream('imageProduction4.csv');
const imageProduction5 = fs.createWriteStream('imageProduction5.csv');
const imageProduction6 = fs.createWriteStream('imageProduction6.csv');

function writeTwoMillionTimesPSQLimg(writer, encoding, callback, start, end, clothing) {
  let id = start;
  let item = 1;
  let colorIndex = 1;
  write();
  function write() {
    let ok = true;
    do {
      const createSimilarProductImg = (id, colorIndex, type, imageNumber) => {
        let resultString = `https://tinyurl.com/lalalime-${type}${imageNumber}, color${colorIndex}, ${id}`;
        return resultString;
      }
      let header = "imgurl, color, productID" + "\n";

      if (id === 1) {
        ok = writer.write(header, encoding);
        for (let j = 1; j < 25; j++) {
          const data = createSimilarProductImg(id, colorIndex, clothing, j) + '\n';
          ok = writer.write(data, encoding);
          item++;
          if (item > 3) {
            colorIndex++;
            item = 1;
          }
          if (colorIndex > 2) {
            colorIndex = 1;
            id++;
          }
        }
      }

      for (let j = 1; j < 25; j++) {
        if (id === end && j === 24) {
          console.log('you are free');
          const data = createSimilarProductImg(id, colorIndex, clothing, j);
          ok = writer.write(data, encoding, callback);
        } else {
          if (id === (end + 1)) {
            break;
          }
          const data = createSimilarProductImg(id, colorIndex, clothing, j) + '\n';
          ok = writer.write(data, encoding);
          item++;
          if (item > 3) {
            colorIndex++;
            item = 1;
          }
          if (colorIndex > 2) {
            colorIndex = 1;
            id++;
          }
          if (id > end) {
            console.log('this does not make any sense');
          }
        }
      }
    } while (id < (end - 1) && ok);
    if (id < (end - 1)) {
      writer.once('drain', write);
    }
  }
}


// writeTwoMillionTimesPSQLimg(imageProduction1, 'utf-8', () => console.log('end!!') || imageProduction1.end(), 1, 2000000, 'Shorts');
// writeTwoMillionTimesPSQLimg(imageProduction2, 'utf-8', () => console.log('end!!') || imageProduction2.end(), 2000001, 4000000, 'Pants');
// writeTwoMillionTimesPSQLimg(imageProduction3, 'utf-8', () => console.log('end!!') || imageProduction3.end(), 4000001, 6000000, 'Skirts');
// writeTwoMillionTimesPSQLimg(imageProduction4, 'utf-8', () => console.log('end!!') || imageProduction4.end(), 6000001, 8000000, 'Dresses');
// writeTwoMillionTimesPSQLimg(imageProduction5, 'utf-8', () => console.log('end!!') || imageProduction5.end(), 8000001, 10000000, 'Tanks');
// writeTwoMillionTimesPSQLimg(imageProduction6, 'utf-8', () => console.log('end!!') || imageProduction6.end(), 10000001, 12000000, 'Sweaters');


// small test
writeTwoMillionTimesPSQLimg(imageProduction1, 'utf-8', () => console.log('end!!') || imageProduction1.end(), 1, 200, 'Shorts');
writeTwoMillionTimesPSQLimg(imageProduction2, 'utf-8', () => console.log('end!!') || imageProduction2.end(), 201, 400, 'Pants');
writeTwoMillionTimesPSQLimg(imageProduction3, 'utf-8', () => console.log('end!!') || imageProduction3.end(), 401, 600, 'Skirts');
writeTwoMillionTimesPSQLimg(imageProduction4, 'utf-8', () => console.log('end!!') || imageProduction4.end(), 601, 800, 'Dresses');
writeTwoMillionTimesPSQLimg(imageProduction5, 'utf-8', () => console.log('end!!') || imageProduction5.end(), 801, 1000, 'Tanks');
writeTwoMillionTimesPSQLimg(imageProduction6, 'utf-8', () => console.log('end!!') || imageProduction6.end(), 1001, 1200, 'Sweaters');
