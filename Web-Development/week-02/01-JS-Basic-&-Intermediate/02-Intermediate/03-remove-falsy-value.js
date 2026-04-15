/*
question : Remove falsy values from object

input : { a: 0, b: null, c: "hello", d: undefined, e: 5 }

outut : { c: "hello", e: 5 }


*/

const input = { a: 0, b: null, c: "hello", d: undefined, e: 5 };

const inputArr = Object.entries(input);

const ans = inputArr.filter((entry) => {
  const value = entry[1];
  if (value) {
    return value;
  }
});

console.log(Object.fromEntries(ans));
