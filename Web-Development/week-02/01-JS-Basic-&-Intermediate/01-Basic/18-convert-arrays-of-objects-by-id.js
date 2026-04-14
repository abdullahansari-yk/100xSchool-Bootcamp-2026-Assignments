/*
    question: Convert array of objects to lookup by id
    input : [{ id: 1, name: "A" }, { id: 2, name: "B" }]
    output : { 1: { id:1, name:"A" }, 2: { id:2, name:"B" } }
*/

// solution : 1

const input = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];

const ans = input.map((obj) => {
  const id = obj.id;
  return [id, obj];
});

// console.log(Object.fromEntries(ans));

// solution 2:

const ans2 = input.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});

console.log(ans2);