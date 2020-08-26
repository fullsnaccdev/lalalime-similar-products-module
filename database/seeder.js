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

// functions for creating the product
// const createDresses = (name) => {
//   let product = {};
//   product.property = 'top';
//   product.type = 'Dresses';
//   product.title = createTitle(name);
//   product.price = createPrice();
//   product.img = [
//     [
//       [
//         "color1",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Cinch+It+Dress/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Cinch+It+Dress/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Cinch+It+Dress/2.jpg"
//       ],
//       [
//         "color2",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/inner-glow/black/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/inner-glow/black/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/inner-glow/black/2.jpg"
//       ],
//       [
//         "color3",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/inner-glow/beige-pink/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/inner-glow/beige-pink/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/inner-glow/beige-pink/2.jpg"
//       ],
//       [
//         "color4",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/inner-glow/purple/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/inner-glow/purple/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/inner-glow/purple/2.jpg"
//       ],
//       [
//         "color5",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/inner-glow/silky-white/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/inner-glow/silky-white/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/inner-glow/silky-white/2.jpg"
//       ]
//     ],
//     [
//       [
//         "color1",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/Black/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/Black/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/Black/2.jpg"
//       ],
//       [
//         "color2",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/Bordeaux+Drama/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/Bordeaux+Drama/2.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/Bordeaux+Drama/3.jpg"
//       ],
//       [
//         "color3",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/almost+blue/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/almost+blue/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/almost+blue/2.jpg"
//       ],
//       [
//         "color4",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/night-black/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/night-black/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/night-black/2.jpg"
//       ],
//       [
//         "color5",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/white/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/white/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/white/2.jpg"
//       ]
//     ],
//     [
//       [
//         "color1",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Refresh+Maxi+Dress+II/Heathered+Black/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Refresh+Maxi+Dress+II/Heathered+Black/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Refresh+Maxi+Dress+II/Heathered+Black/2.jpg"
//       ],
//       [
//         "color2",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Refresh+Maxi+Dress+II/Heathered+Medium+Grey/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Refresh+Maxi+Dress+II/Heathered+Medium+Grey/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Refresh+Maxi+Dress+II/Heathered+Medium+Grey/2.jpg"
//       ],
//       [
//         "color3",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Refresh+Maxi+Dress+II/moonwalk/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Refresh+Maxi+Dress+II/moonwalk/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Refresh+Maxi+Dress+II/moonwalk/2.jpg"
//       ],
//       [
//         "color4",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Refresh+Maxi+Dress+II/red/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Refresh+Maxi+Dress+II/red/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Refresh+Maxi+Dress+II/red/2.jpg"
//       ],
//       [
//         "color5",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Refresh+Maxi+Dress+II/riverstone/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Refresh+Maxi+Dress+II/riverstone/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Refresh+Maxi+Dress+II/riverstone/2.jpg"
//       ]
//     ],
//     [
//       [
//         "color1",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/night-black/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/night-black/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/night-black/2.jpg"
//       ],
//       [
//         "color2",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/white/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/white/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/white/2.jpg"
//       ],
//       [
//         "color3",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/Black/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/Black/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/Black/2.jpg"
//       ],
//       [
//         "color4",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/almost+blue/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/almost+blue/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/almost+blue/2.jpg"
//       ],
//       [
//         "color5",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/Bordeaux+Drama/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/Bordeaux+Drama/2.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/Bordeaux+Drama/3.jpg"
//       ]

//     ],
//   ];
//   return product;
// };

// tank
// const createTanks = (name) => {
//   let product = {};
//   product.property = 'top';
//   product.type = 'Tanks';
//   product.title = createTitle(name);
//   product.price = createPrice();
//   product.img = [
//     [
//       [
//         "color1",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/Black/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/Black/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/Black/2.jpg"
//       ],
//       [
//         "color2",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/Rustic+Clay/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/Rustic+Clay/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/Rustic+Clay/2.jpg"
//       ],
//       [
//         "color3",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/Rustic+Coral/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/Rustic+Coral/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/Rustic+Coral/2.jpg"
//       ],
//       [
//         "color4",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/White/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/White/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/White/2.jpg"
//       ],
//       [
//         "color5",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/tempest+blue/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/tempest+blue/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/tempest+blue/2.jpg"
//       ]
//     ],
//     [
//       [
//         "color1",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Run+Off-Route+Tank/Black/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Run+Off-Route+Tank/Black/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Run+Off-Route+Tank/Black/2.jpg"
//       ],
//       [
//         "color2",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Run+Off-Route+Tank/Frosted+Mulberry/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Run+Off-Route+Tank/Frosted+Mulberry/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Run+Off-Route+Tank/Frosted+Mulberry/2.jpg"
//       ],
//       [
//         "color3",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Run+Off-Route+Tank/Heartthrob/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Run+Off-Route+Tank/Heartthrob/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Run+Off-Route+Tank/Heartthrob/2.jpg"
//       ],
//       [
//         "color4",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Run+Off-Route+Tank/White/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Run+Off-Route+Tank/White/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Run+Off-Route+Tank/White/2.jpg"
//       ],
//       [
//         "color5",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Run+Off-Route+Tank/aqua+blue/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Run+Off-Route+Tank/aqua+blue/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Run+Off-Route+Tank/aqua+blue/2.jpg"
//       ]
//     ],
//     [
//       [
//         "color1",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/Black/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/Black/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/Black/2.jpg"
//       ],
//       [
//         "color2",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/Rustic+Clay/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/Rustic+Clay/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/Rustic+Clay/2.jpg"
//       ],
//       [
//         "color3",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/Rustic+Coral/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/Rustic+Coral/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/Rustic+Coral/2.jpg"
//       ],
//       [
//         "color4",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/White/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/White/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/White/2.jpg"
//       ],
//       [
//         "color5",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/tempest+blue/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/tempest+blue/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/tempest+blue/2.jpg"
//       ]
//     ],
//     [
//       [
//         "color1",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Sculpt+Tank+II/Black/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Sculpt+Tank+II/Black/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Sculpt+Tank+II/Black/2.jpg"
//       ],
//       [
//         "color2",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Sculpt+Tank+II/Light+Coral/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Sculpt+Tank+II/Light+Coral/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Sculpt+Tank+II/Light+Coral/2.jpg"
//       ],
//       [
//         "color3",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Sculpt+Tank+II/Polar+Shift+Alpine+White+Black/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Sculpt+Tank+II/Polar+Shift+Alpine+White+Black/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Sculpt+Tank+II/Polar+Shift+Alpine+White+Black/2.jpg"
//       ],
//       [
//         "color4",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Sculpt+Tank+II/True+Navy/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Sculpt+Tank+II/True+Navy/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Sculpt+Tank+II/True+Navy/2.jpg"
//       ],
//       [
//         "color5",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Sculpt+Tank+II/White/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Sculpt+Tank+II/White/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Sculpt+Tank+II/White/2.jpg"
//       ]
//     ],
//   ];
//   return product;
// };

// sweater
// const createSweaters = (name) => {
//   let product = {};
//   product.property = 'top';
//   product.type = 'Sweaters';
//   product.title = createTitle(name);
//   product.price = createPrice();
//   product.img = [
//     [
//       [
//         "color1",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/Arctic+Plum/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/Arctic+Plum/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/Arctic+Plum/2.jpg"
//       ],
//       [
//         "color2",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/Black/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/Black/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/Black/2.jpg"
//       ],
//       [
//         "color3",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/Heathered+Everglades/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/Heathered+Everglades/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/Heathered+Everglades/2.jpg"
//       ],
//       [
//         "color4",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/Mystic+Iris/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/Mystic+Iris/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/Mystic+Iris/2.jpg"
//       ],
//       [
//         "color5",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/White/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/White/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/White/2.jpg"
//       ]
//     ],
//     [
//       [
//         "color1",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Sit+In+Lotus+Wrap+II/Angel+Wing/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Sit+In+Lotus+Wrap+II/Angel+Wing/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Sit+In+Lotus+Wrap+II/Angel+Wing/2.jpg"
//       ],
//       [
//         "color2",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Sit+In+Lotus+Wrap+II/Black+Cherry/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Sit+In+Lotus+Wrap+II/Black+Cherry/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Sit+In+Lotus+Wrap+II/Black+Cherry/2.jpg"
//       ],
//       [
//         "color3",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Sit+In+Lotus+Wrap+II/Heathered+Dark+Olive/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Sit+In+Lotus+Wrap+II/Heathered+Dark+Olive/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Sit+In+Lotus+Wrap+II/Heathered+Dark+Olive/2.jpg"
//       ],
//       [
//         "color4",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Sit+In+Lotus+Wrap+II/Heathered+Plum/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Sit+In+Lotus+Wrap+II/Heathered+Plum/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Sit+In+Lotus+Wrap+II/Heathered+Plum/2.jpg"
//       ],
//       [
//         "color5",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Sit+In+Lotus+Wrap+II/Heathered+Starlight/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Sit+In+Lotus+Wrap+II/Heathered+Starlight/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Sit+In+Lotus+Wrap+II/Heathered+Starlight/2.jpg"
//       ]
//     ],
//     [
//       [
//         "color1",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba/Heathered+Night+Diver/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba/Heathered+Night+Diver/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba/Heathered+Night+Diver/2.jpg"
//       ],
//       [
//         "color2",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba/chrome/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba/chrome/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba/chrome/2.jpg"
//       ],
//       [
//         "color3",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba/heathered+marvel/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba/heathered+marvel/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba/heathered+marvel/2.jpg"
//       ],
//       [
//         "color4",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba/light+grey/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba/light+grey/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba/light+grey/2.jpg"
//       ],
//       [
//         "color5",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba/smoky+blush/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba/smoky+blush/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba/smoky+blush/2.jpg"
//       ]
//     ],
//     [
//       [
//         "color1",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/Arctic+Plum/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/Arctic+Plum/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/Arctic+Plum/2.jpg"
//       ],
//       [
//         "color2",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/Black/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/Black/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/Black/2.jpg"
//       ],
//       [
//         "color3",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/Heathered+Everglades/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/Heathered+Everglades/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/Heathered+Everglades/2.jpg"
//       ],
//       [
//         "color4",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/Mystic+Iris/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/Mystic+Iris/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/Mystic+Iris/2.jpg"
//       ],
//       [
//         "color5",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/White/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/White/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/White/2.jpg"
//       ]
//     ],
//   ];
//   return product;
// };

// skirt
// const createSkirts = (name) => {
//   let product = {};
//   product.property = 'bottom';
//   product.type = 'Skirts';
//   product.title = createTitle(name);
//   product.price = createPrice();
//   product.img = [
//     [
//       [
//         "color1",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/Cherry+Cola/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/Cherry+Cola/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/Cherry+Cola/2.jpg"
//       ],
//       [
//         "color2",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/Frontier/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/Frontier/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/Frontier/2.jpg"
//       ],
//       [
//         "color3",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/Grey+Sage/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/Grey+Sage/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/Grey+Sage/2.jpg"
//       ],
//       [
//         "color4",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/Silverstone/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/Silverstone/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/Silverstone/2.jpg"
//       ],
//       [
//         "color5",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/black/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/black/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/black/2.jpg"
//       ]
//     ],
//     [
//       [
//         "color1",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/White/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/White/2.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/White/3.jpg"
//       ],
//       [
//         "color2",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/butter+pink/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/butter+pink/2.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/butter+pink/3.jpg"
//       ],
//       [
//         "color3",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/Jet+Stream/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/Jet+Stream/2.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/Jet+Stream/3.jpg"
//       ],
//       [
//         "color4",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/Black/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/Black/2.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/Black/3.jpg"
//       ],
//       [
//         "color5",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/marvel/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/marvel/2.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/marvel/3.jpg"
//       ]
//     ],
//     [
//       [
//         "color1",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/Merlot/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/Merlot/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/Merlot/2.jpg"
//       ],
//       [
//         "color2",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/heathered+white/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/heathered+white/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/heathered+white/2.jpg"
//       ],
//       [
//         "color3",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/mulberry/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/mulberry/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/mulberry/2.jpg"
//       ],
//       [
//         "color4",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/navy/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/navy/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/navy/2.jpg"
//       ],
//       [
//         "color5",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/olive/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/olive/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/olive/2.jpg"
//       ]
//     ],
//     [
//       [
//         "color1",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/Black/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/Black/2.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/Black/3.jpg"
//       ],
//       [
//         "color2",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/Jet+Stream/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/Jet+Stream/2.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/Jet+Stream/3.jpg"
//       ],
//       [
//         "color3",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/White/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/White/2.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/White/3.jpg"
//       ],
//       [
//         "color4",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/marvel/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/marvel/2.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/marvel/3.jpg"
//       ],
//       [
//         "color5",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/butter+pink/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/butter+pink/2.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/butter+pink/3.jpg"
//       ]
//     ],
//   ];
//   return product;
// };

// shorts
// const createShorts = (name) => {
//   let product = {};
//   product.property = 'bottom';
//   product.type = 'Shorts';
//   product.title = createTitle(name);
//   product.price = createPrice();
//   product.img = [
//     [
//       [
//         "color1",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/In+Movement+Short+2.5/Black/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/In+Movement+Short+2.5/Black/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/In+Movement+Short+2.5/Black/2.jpg"
//       ],
//       [
//         "color2",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/In+Movement+Short+2.5/Dark+Adobe/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/In+Movement+Short+2.5/Dark+Adobe/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/In+Movement+Short+2.5/Dark+Adobe/2.jpg"
//       ],
//       [
//         "color3",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/In+Movement+Short+2.5/Dark+Olive/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/In+Movement+Short+2.5/Dark+Olive/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/In+Movement+Short+2.5/Dark+Olive/2.jpg"
//       ],
//       [
//         "color4",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/In+Movement+Short+2.5/Incognito+Camo+Multi+Gator+Green/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/In+Movement+Short+2.5/Incognito+Camo+Multi+Gator+Green/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/In+Movement+Short+2.5/Incognito+Camo+Multi+Gator+Green/2.jpg"
//       ],
//       [
//         "color5",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/In+Movement+Short+2.5/tempest+blue/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/In+Movement+Short+2.5/tempest+blue/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/In+Movement+Short+2.5/tempest+blue/2.jpg"
//       ]
//     ],
//     [
//       [
//         "color1",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Hotty+Hot+Short+II+2.5/Amber+Aura/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Hotty+Hot+Short+II+2.5/Amber+Aura/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Hotty+Hot+Short+II+2.5/Amber+Aura/2.jpg"
//       ],
//       [
//         "color2",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Hotty+Hot+Short+II+2.5/Formation+Camo+Deep+Coal+Multi+Black/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Hotty+Hot+Short+II+2.5/Formation+Camo+Deep+Coal+Multi+Black/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Hotty+Hot+Short+II+2.5/Formation+Camo+Deep+Coal+Multi+Black/2.jpg"
//       ],
//       [
//         "color3",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Hotty+Hot+Short+II+2.5/HeartThrob/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Hotty+Hot+Short+II+2.5/HeartThrob/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Hotty+Hot+Short+II+2.5/HeartThrob/2.jpg"
//       ],
//       [
//         "color4",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Hotty+Hot+Short+II+2.5/Jet+Stream/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Hotty+Hot+Short+II+2.5/Jet+Stream/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Hotty+Hot+Short+II+2.5/Jet+Stream/2.jpg"
//       ],
//       [
//         "color5",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Hotty+Hot+Short+II+2.5/Vitalize+MultiBlack/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Hotty+Hot+Short+II+2.5/Vitalize+MultiBlack/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Hotty+Hot+Short+II+2.5/Vitalize+MultiBlack/2.jpg"
//       ]
//     ],
//     [
//       [
//         "color1",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Speed+Up+Short+Long+4+updated+fit/Aquatic+Green/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Speed+Up+Short+Long+4+updated+fit/Aquatic+Green/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Speed+Up+Short+Long+4+updated+fit/Aquatic+Green/2.jpg"
//       ],
//       [
//         "color2",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Speed+Up+Short+Long+4+updated+fit/Heartthrob/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Speed+Up+Short+Long+4+updated+fit/Heartthrob/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Speed+Up+Short+Long+4+updated+fit/Heartthrob/2.jpg"
//       ],
//       [
//         "color3",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Speed+Up+Short+Long+4+updated+fit/Intergalactic/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Speed+Up+Short+Long+4+updated+fit/Intergalactic/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Speed+Up+Short+Long+4+updated+fit/Intergalactic/2.jpg"
//       ],
//       [
//         "color4",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Speed+Up+Short+Long+4+updated+fit/Pink+Shell/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Speed+Up+Short+Long+4+updated+fit/Pink+Shell/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Speed+Up+Short+Long+4+updated+fit/Pink+Shell/2.jpg"
//       ],
//       [
//         "color5",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Speed+Up+Short+Long+4+updated+fit/True+Navy/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Speed+Up+Short+Long+4+updated+fit/True+Navy/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Speed+Up+Short+Long+4+updated+fit/True+Navy/2.jpg"
//       ]
//     ],
//     [
//       [
//         "color1",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/TrackerShortV4/Frosted+Mulberry/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/TrackerShortV4/Frosted+Mulberry/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/TrackerShortV4/Frosted+Mulberry/2.jpg"
//       ],
//       [
//         "color2",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/TrackerShortV4/Heather+Lux+Multi+Black/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/TrackerShortV4/Heather+Lux+Multi+Black/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/TrackerShortV4/Heather+Lux+Multi+Black/2.jpg"
//       ],
//       [
//         "color3",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/TrackerShortV4/Jet+Stream/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/TrackerShortV4/Jet+Stream/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/TrackerShortV4/Jet+Stream/2.jpg"
//       ],
//       [
//         "color4",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/TrackerShortV4/Heather+Lux+Multi+Black/4.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/TrackerShortV4/Heather+Lux+Multi+Black/6.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/TrackerShortV4/Heather+Lux+Multi+Black/5.jpg"
//       ],
//       [
//         "color5",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/TrackerShortV4/White/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/TrackerShortV4/White/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/TrackerShortV4/White/2.jpg"
//       ]
//     ],
//   ];
//   return product;
// };

// pants
// const createPants = (name) => {
//   let product = {};
//   product.property = 'bottom';
//   product.type = 'Pants';
//   product.title = createTitle(name);
//   product.price = createPrice();
//   product.img = [
//     [
//       [
//         "color1",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Align+Pant+II+25/Aquatic+Green/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Align+Pant+II+25/Aquatic+Green/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Align+Pant+II+25/Aquatic+Green/2.jpg"
//       ],
//       [
//         "color2",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Align+Pant+II+25/Dark+Adobe/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Align+Pant+II+25/Dark+Adobe/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Align+Pant+II+25/Dark+Adobe/2.jpg"
//       ],
//       [
//         "color3",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Align+Pant+II+25/Melanite/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Align+Pant+II+25/Melanite/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Align+Pant+II+25/Melanite/2.jpg"
//       ],
//       [
//         "color4",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Align+Pant+II+25/Tempest+Blue/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Align+Pant+II+25/Tempest+Blue/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Align+Pant+II+25/Tempest+Blue/2.jpg"
//       ],
//       [
//         "color5",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Align+Pant+II+25/Titanium/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Align+Pant+II+25/Titanium/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Align+Pant+II+25/Titanium/2.jpg"
//       ]
//     ],
//     [
//       [
//         "color1",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Free-pants/Black/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Free-pants/Black/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Free-pants/Black/2.jpg"
//       ],
//       [
//         "color2",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Free-pants/Chambray/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Free-pants/Chambray/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Free-pants/Chambray/2.jpg"
//       ],
//       [
//         "color3",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Free-pants/Dark+Olive/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Free-pants/Dark+Olive/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Free-pants/Dark+Olive/2.jpg"
//       ],
//       [
//         "color4",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Free-pants/Night+Diver/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Free-pants/Night+Diver/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Free-pants/Night+Diver/2.jpg"
//       ],
//       [
//         "color5",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Free-pants/Plum+Shadow/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Free-pants/Plum+Shadow/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Free-pants/Plum+Shadow/2.jpg"
//       ]
//     ],
//     [
//       [
//         "color1",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/In+Movement+Tight+25+Everlux/Everglades/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/In+Movement+Tight+25+Everlux/Everglades/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/In+Movement+Tight+25+Everlux/Everglades/2.jpg"
//       ],
//       [
//         "color2",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/In+Movement+Tight+25+Everlux/Moonwalk/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/In+Movement+Tight+25+Everlux/Moonwalk/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/In+Movement+Tight+25+Everlux/Moonwalk/2.jpg"
//       ],
//       [
//         "color3",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/In+Movement+Tight+25+Everlux/Plumful/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/In+Movement+Tight+25+Everlux/Plumful/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/In+Movement+Tight+25+Everlux/Plumful/2.jpg"
//       ],
//       [
//         "color4",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/In+Movement+Tight+25+Everlux/Titanium/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/In+Movement+Tight+25+Everlux/Titanium/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/In+Movement+Tight+25+Everlux/Titanium/2.jpg"
//       ],
//       [
//         "color5",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/In+Movement+Tight+25+Everlux/True+Navy/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/In+Movement+Tight+25+Everlux/True+Navy/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/In+Movement+Tight+25+Everlux/True+Navy/2.jpg"
//       ]
//     ],
//     [
//       [
//         "color1",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Wunder+Under+High-Rise+Tight+25+Full-On+Luxtreme/Black/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Wunder+Under+High-Rise+Tight+25+Full-On+Luxtreme/Black/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Wunder+Under+High-Rise+Tight+25+Full-On+Luxtreme/Black/2.jpg"
//       ],
//       [
//         "color2",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Wunder+Under+High-Rise+Tight+25+Full-On+Luxtreme/Formation+Camo+Deep+Coal+Multi/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Wunder+Under+High-Rise+Tight+25+Full-On+Luxtreme/Formation+Camo+Deep+Coal+Multi/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Wunder+Under+High-Rise+Tight+25+Full-On+Luxtreme/Formation+Camo+Deep+Coal+Multi/2.jpg"
//       ],
//       [
//         "color3",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Wunder+Under+High-Rise+Tight+25+Full-On+Luxtreme/Rustic+Coral/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Wunder+Under+High-Rise+Tight+25+Full-On+Luxtreme/Rustic+Coral/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Wunder+Under+High-Rise+Tight+25+Full-On+Luxtreme/Rustic+Coral/2.jpg"
//       ],
//       [
//         "color4",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Wunder+Under+High-Rise+Tight+25+Full-On+Luxtreme/True+Navy/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Wunder+Under+High-Rise+Tight+25+Full-On+Luxtreme/True+Navy/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Wunder+Under+High-Rise+Tight+25+Full-On+Luxtreme/True+Navy/2.jpg"
//       ],
//       [
//         "color5",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Wunder+Under+High-Rise+Tight+25+Full-On+Luxtreme/White/1.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Wunder+Under+High-Rise+Tight+25+Full-On+Luxtreme/White/3.jpg",
//         "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Wunder+Under+High-Rise+Tight+25+Full-On+Luxtreme/White/2.jpg"
//       ]
//     ],
//   ];
//   return product;
// };

// new functions
const createDresses = (name) => {
  let product = {};
  product.property = 'top';
  product.type = 'Dresses';
  product.title = createTitle(name);
  product.price = createPrice();
  product.img = [];
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
    product.img.push(item);
  }
  return product;
};

const createTanks = (name) => {
  let product = {};
  product.property = 'top';
  product.type = 'Tanks';
  product.title = createTitle(name);
  product.price = createPrice();
  product.img = [];
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
    product.img.push(item);
  }
  return product;
};

const createSweaters = (name) => {
  let product = {};
  product.property = 'top';
  product.type = 'Sweaters';
  product.title = createTitle(name);
  product.price = createPrice();
  product.img = [];
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
    product.img.push(item);
  }
  return product;
};

const createSkirts = (name) => {
  let product = {};
  product.property = 'bottom';
  product.type = 'Skirts';
  product.title = createTitle(name);
  product.price = createPrice();
  product.img = [];
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
    product.img.push(item);
  }
  return product;
};

const createShorts = (name) => {
  let product = {};
  product.property = 'bottom';
  product.type = 'Shorts';
  product.title = createTitle(name);
  product.price = createPrice();
  product.img = [];
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
    product.img.push(item);
  }
  return product;
};

const createPants = (name) => {
  let product = {};
  product.property = 'bottom';
  product.type = 'Pants';
  product.title = createTitle(name);
  product.price = createPrice();
  product.img = [];
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
    product.img.push(item);
  }
  return product;
};

const bottomProducts = () => {
  let botProductsArr = [];
  for (let i = 0; i < 20; i++) {
    botProductsArr.push(createShorts(name));
    botProductsArr.push(createPants(name));
    botProductsArr.push(createSkirts(name));
  }
  return botProductsArr;
}

const topProducts = () => {
  let topProductsArr = [];
  for (let i = 0; i < 20; i++) {
    topProductsArr.push(createDresses(name));
    topProductsArr.push(createTanks(name));
    topProductsArr.push(createSweaters(name));
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

