/*
quesition : Build index of ids grouped by category
input : [
  { id: 1, category: "fruit" },
  { id: 2, category: "veggie" },
  { id: 3, category: "fruit" }
]


output : { fruit: [1,3], veggie: [2] }
*/

// solution:

const input = [
  { id: 1, category: "fruit" },
  { id: 2, category: "veggie" },
  { id: 3, category: "fruit" },
];

const ans = input.reduce((acc, curr) => {
  const { id, category } = curr;

  acc[category] = acc[category] || [];
  acc[category].push(id);
  return acc;
}, {});

console.log(ans);
