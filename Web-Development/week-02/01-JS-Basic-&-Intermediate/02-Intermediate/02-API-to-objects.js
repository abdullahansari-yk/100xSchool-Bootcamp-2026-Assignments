/*

question : Transform API response to object (id → name)

input : [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
]

output : { 1: "Alice", 2: "Bob" }

*/

// solution 1: using map

const input = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const ans = input.map((obj) => {
  const id = obj.id;
  const name = obj.name;

  return [id, name];
});

console.log(Object.fromEntries(ans));

// solution 2 : using reduce

const ans2=input.reduce((acc, curr) => {
  acc[curr.id] = curr.name;

  return acc;
}, {});

console.log(ans2)
