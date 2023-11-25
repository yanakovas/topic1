// Задача 1
const prices:number[] = [100, 150, 200, 250];

const stringPrices:string[] = prices.map((price) => `${price}p`);
console.log(stringPrices);

// Задача 2
type Users = [
  [string, number],
  [string, number],
  [string, number],
  [string, number],
]
const users:Users = [
  ['alex', 32],
  ['tomas', 17],
  ['olga', 14],
  ['andre', 24],
];
const adultsUsers: [string, number][] = users.filter((user) => user[1] > 18);
console.log(adultsUsers);

// Задача 3
type Products = [
  { title: string, price: number},
  { title: string, price: number},
  { title: string, price: number},
]
const products:Products = [
  { title: 'пицца', price: 200 },
  { title: 'баранина', price: 300 },
  { title: 'креветки', price: 400 },
];

const totalPrice: number = products.reduce((acc, product) => acc + product.price, 0);
console.log(totalPrice);
