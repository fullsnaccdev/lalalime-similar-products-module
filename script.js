import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 300 },
    { duration: '30s', target: 500 }, // normal load
    { duration: '30s', target: 800 },
    { duration: '30s', target: 1000 }, // around the breaking point
    { duration: '30s', target: 400 }, // scale down. recovery stage
  ],
};

export default function () {
  const BASE_URL = 'http://localhost:3003'; // make sure this is not production
  let number = Math.floor(Math.random() * 12000000);
  // let responses = http.batch([
  //   [
  //     'GET',
  //     `${BASE_URL}/api/similar_products/${number}/`,
  //     null,
  //     { tags: { name: 'products' } },
  //   ]
  // ]);

  let responses = http.batch([
    [
      'GET',
      `${BASE_URL}/api/similar_products/3004/`,
      null,
      { tags: { name: 'products' } },
    ],
    // [
    //   'GET',
    //   `${BASE_URL}/api/similar_products/600000/`,
    //   null,
    //   { tags: { name: 'products' } },
    // ],
    // [
    //   'GET',
    //   `${BASE_URL}/api/similar_products/8000000/`,
    //   null,
    //   { tags: { name: 'products' } },
    // ],
    // [
    //   'GET',
    //   `${BASE_URL}/api/similar_products/11000000/`,
    //   null,
    //   { tags: { name: 'products' } },
    // ],
  ]);



  sleep(1);
}