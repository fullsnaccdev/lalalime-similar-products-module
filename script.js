import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 200 },
    { duration: '30s', target: 400 }, // normal load
    { duration: '30s', target: 800 },
    { duration: '1m', target: 1000 }, // around the breaking point
    { duration: '30s', target: 300 }, // scale down. recovery stage
  ],
};

export default function () {
  const BASE_URL = 'http://localhost:3004'; // make sure this is not production

  let responses = http.batch([
    [
      'GET',
      `${BASE_URL}/api/similar_products/${Math.floor(Math.random() * 12000000)}/`,
      null,
      { tags: { name: 'products' } },
    ]
  ]);

  sleep(1);
}