/*
question : Check if all values in object are numbers
input : { a: 1, b: "hello", c: 3 }
output : false
*/

// solution :

const input = { a: 1, b: "Hello", c: 3 };

const inputValue = Object.values(input);
const ans = inputValue.every((val) => typeof(val) == "number");
console.log(ans);

