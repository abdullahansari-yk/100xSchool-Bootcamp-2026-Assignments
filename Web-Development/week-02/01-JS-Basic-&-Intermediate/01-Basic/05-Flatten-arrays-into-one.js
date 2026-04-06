/*
    input={ fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }

    output: ["apple", "banana", "carrot", "pea"]
*/

// solution 1 : Use flat()

const input = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] };

const arr = Object.values(input).flat();
console.log(arr);

// solution 2 : cerate new Array and psh key and values inside it.

const arr2 = Object.values(input);
const newArr = [];
const arr3 = arr.map(([key, value]) => {
  newArr.push(key);
  newArr.push(value);
});
console.log(newArr);
