/*
question : Remove duplicate objects by id
input : [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" }
]


output : [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
]

*/

// solution : use reduce

const input = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" },
];

const ans = input.reduce((acc, curr) => {

  const id = curr.id;
  if (!acc[id]) {
    acc.push(curr);
  }

  return acc;
}, []);

console.log(ans);
