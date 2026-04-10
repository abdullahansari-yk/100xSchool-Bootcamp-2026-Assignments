/* 
question : Pick only keys from object

input: { name: "Rahul", age: 23, city: "Noida" }
keys= ["name","city"]

output: { name: "Rahul", city: "Noida" }

*/

// solution 1 : use if else and filter to get the desired result

const input = { name: "Rahul", age: 23, city: "Noida" };
const keys = ["name", "city"];

const inputArr = Object.entries(input);

const arr = inputArr.filter((val) => {
  if (val[0] == keys[0] || val[0] == keys[1]) {
    return val[0];
  }
});

const obj = Object.fromEntries(arr);
// console.log(obj)

// solution 2 : use inbuild method => Array.includes(value), will return either true or false.

const ansArr = inputArr.filter((value) => {
  const key = value[0];

  return keys.includes(key);
});

const ansObj = Object.fromEntries(ansArr);
console.log(ansObj);
