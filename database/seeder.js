const Lalalime = require('./index.js');
const faker = require('faker');

// data
const price = ['$38.00 USD', '$48.00 USD', '$58.00 USD', '$68.00 USD','$78.00 USD','$88.00 USD','$98.00 USD','$108.00 USD','$118.00 USD','$128.00 USD','$138.00 USD'];
const name = ['F.O.M.O', 'Fast and Free', 'Rule the Day', 'Align', 'Spring Break Away', 'On the Fly', 'Everyday', 'All the Right Places','Sun Setter', 'Ebb to the Street', 'Define', 'All Yours', 'Energy', 'Free to be Serene'];


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

//create product function
const createSimilarProductsLine = (property, type) => {
  let productsLine = {};
  productsLine.property = property;
  productsLine.type = type;
  productsLine.title = createTitle(name);
  productsLine.price = createPrice();
  productsLine.img = [];
  for (let i = 1; i < 5; i++) {
    let item = [];
    for (let j = 1; j < 6; j++) {
      let colors = [];
      colors.push(`color${j}`);
      colors.push(faker.image.fashion());
      colors.push(faker.image.fashion());
      colors.push(faker.image.fashion());
      item.push(colors);
    }
    productsLine.img.push(item);
  }
  return productsLine;
};

const bottomProducts = () => {
  let botProductsArr = [];
  for (let i = 0; i < 20; i++) {
    botProductsArr.push(createSimilarProductsLine('bottom', 'Shorts'));
    botProductsArr.push(createSimilarProductsLine('bottom', 'Pants'));
    botProductsArr.push(createSimilarProductsLine('bottom', 'Skirts'));
  }
  return botProductsArr;
}

const topProducts = () => {
  let topProductsArr = [];
  for (let i = 0; i < 20; i++) {
    topProductsArr.push(createSimilarProductsLine('top', 'Dresses'));
    topProductsArr.push(createSimilarProductsLine('top', 'Tanks'));
    topProductsArr.push(createSimilarProductsLine('top', 'Sweaters'));
  }
  return topProductsArr;
}

const combineProducts = () => {
  let bottData = bottomProducts();
  let topData = topProducts()
  return [...bottData, ...topData];
}


// seeding data
const insertData = () => {
  Lalalime.insertMany(combineProducts())
  .then(() => console.log('db seeded'))
  .catch((err) => console.log('seed err', err))
}

insertData();

