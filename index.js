// Задача 1
const prices = [100, 150, 200, 250];

const stringPrices = prices.map((price) => `${price}p`);
console.log(stringPrices);

// Задача 2
const users = [
  ['alex', 32],
  ['tomas', 17],
  ['olga', 14],
  ['andre', 24],
];
const adultsUsers = users.filter((user) => user[1] > 18);
console.log(adultsUsers);

// Задача 3
const products = [
  { title: 'пицца', price: 200 },
  { title: 'баранина', price: 300 },
  { title: 'креветки', price: 400 },
];

const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
console.log(totalPrice);
