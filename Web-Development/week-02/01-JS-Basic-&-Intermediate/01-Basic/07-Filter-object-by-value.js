/* 
    input={ a: 20, b: 60, c: 40, d: 90 }
    output= { b: 60, d: 90 }
*/

// solution :

const input = { a: 20, b: 60, c: 40, d: 90 };

const arr = Object.entries(input).filter(([key, value]) =>
  value > 50 ? key : null,
);

const obj = Object.fromEntries(arr);

console.log(obj);
