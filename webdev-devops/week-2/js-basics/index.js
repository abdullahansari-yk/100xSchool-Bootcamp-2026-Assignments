// 1. Sum values in object arrays
const input = {
  food: [10, 20, 30],
  travel: [5, 15],
  bills: [40, 60],
};

// output =>  { food: 60, travel: 20, bills: 100 }

// Solution => we need to use entries() and fromEntries() to get result.
const result = Object.fromEntries(
  Object.entries(input).map(([key, values]) => [
    key,
    // console.log(values)
    values.reduce((acc, curr) => acc + curr, 0),
  ]),
);
// console.log(result);

// 2.Count word occurrences in array

const input2 = ["apple", "banana", "apple", "orange", "banana", "apple"];

// output => { apple: 3, banana: 2, orange: 1 }

// Solution =>

const result2 = input2.reduce((acc, word) => {
  acc[word] = (acc[word] ?? 0) + 1; // apple = (apple || 0)+1
  return acc;
}, {});
// console.log(result2);

// 3. Swap keys and values of object

const input3 = { a: "x", b: "y", c: "z" };

// output => { x: "a", y: "b", z: "c" }

// solution => just change the position of key and vlaues before returning them.

const result3 = Object.entries(input3).map(([key, values]) => [
  // (key = values),
  // (values = key),
  //   key,
  values,
  key,
]);
// console.log(result3);

// 4. Find the largest value key

const input4 = { a: 50, b: 50, c: 200 };
// output => b

const result4 = Object.entries(input4).reduce((maxKey, [key, value]) => {
  return value > input4[maxKey] ? key : maxKey;
  //   console.log(input4[maxKey]);
}, Object.keys(input4)[0]);
console.log(result4);