/* 
    Input: { a: "x", b: "y", c: "z" }
    output: { x: "a", y: "b", z: "c" }
*/

const input = { a: "x", b: "y", c: "z" };

const arr = Object.entries(input).map(([key, value]) => [value, key]);
const obj = Object.fromEntries(arr);
console.log(obj);
