/*
question : Transform array of orders into revenue per category
input : [
  { id: 1, category: "electronics", price: 100 },
  { id: 2, category: "clothes", price: 50 },
  { id: 3, category: "electronics", price: 200 }
]

output : { electronics: 300, clothes: 50 }

*/

// solution : use reduce

const input = [
  { id: 1, category: "electronics", price: 100 },
  { id: 2, category: "clothes", price: 50 },
  { id: 3, category: "electronics", price: 200 },
];

const ans = input.reduce((acc, curr) => {
  const category = curr.category;
  const price = curr.price;
  if (acc[category]) {
    acc[category] += price;
  } else {
    acc[category] = price;
  }

  return acc;
}, {});

console.log(ans);
