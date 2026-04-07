/*

 input=[
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" }
]

output= { Delhi: ["A", "C"], Mumbai: ["B"] }

*/

// solution: use reduce beacuse we dont need array of same length

const input = [
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" },
];

const ans = input.reduce((obj, currVal) => {
  const name = currVal.name;
  const city = currVal.city;

  //  {mumbai:[]} this is what below code does
  if (!obj[city]) {
    obj[city] = [];
  }

  // push name(A, B) inside array of city
  obj[city].push(name);

  return obj;
}, {});

console.log(ans);
