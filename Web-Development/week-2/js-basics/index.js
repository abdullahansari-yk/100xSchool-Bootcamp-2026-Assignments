// {} -> []  use object.entries()
// [] -> {}  use fromEntries

// 20 
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

// 5. Flatten object of arrays into one array

const input5 = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] };

// output => ["apple", "banana", "carrot", "pea"]
// solution => use flat()

const result5 = Object.values(input5).flat();
console.log(result5)


// 6. Group people by city

const input6 = [
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" },
];

// output => { Delhi: ["A", "C"], Mumbai: ["B"] }
// solution => use reduce because we need one final result(obj) not array of some lengths.

const result6 = input6.reduce((acc, curr) => {
  const city = curr.city;
  const name = curr.name;

  // if city doesnt exit (which is not exist in 1st iteration, oviously), then create it.
  if (!acc[city]) {
    acc[city] = []; // { mumbai : [] }
  }

  // push name into that city's array
  acc[city].push(name);

  return acc;
}, {});

// console.log(result6);

// 7. Filter object by values > 50

const input7 = { a: 20, b: 60, c: 40, d: 90 };

// output => { b: 60, d: 90 }
// solution => we need to filter the values, so use filter()

const result7 = Object.fromEntries(
  Object.entries(input7).filter(([keys, values]) => values > 50),
);
// console.log(result7);

// 8. Find student with highest average mark

const input8 = { A: [80, 90], B: [710, 75, 85] };
//  output => A
// solution => since we are returning only one value, thats why we should use reduce.

const result8 = Object.entries(input8).reduce(
  (acc, [student, marks]) => {
    
    // calculate average on current student
    const sum = marks.reduce((total, num) => total + num, 0);
    const avg = sum / marks.length;

    if (avg > acc.avg) {
     return { name: student, avg: avg };
    }

    return acc;
  },
  { name: null, avg: -Infinity },
);
console.log(result8.name);
