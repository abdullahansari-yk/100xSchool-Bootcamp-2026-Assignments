/*
question : Find common keys between two objects
input : { a: 1, b: 2, c: 3 }, { b: 4, c: 5, d: 6 }
output : ["b","c"]

*/

// solution :

const obj = { a: 1, b: 2, c: 3 };
const obj2 = { b: 4, c: 5, d: 6 };

const key1 = Object.keys(obj);
const key2 = Object.keys(obj2);

// console.log(key1);
// console.log(key2);

const ans=key1.filter((key) => key2.includes(key));

console.log(ans)
