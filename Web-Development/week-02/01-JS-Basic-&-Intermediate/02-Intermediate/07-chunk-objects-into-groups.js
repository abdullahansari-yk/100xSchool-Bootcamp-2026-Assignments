/*
question :  Chunk object entries into groups of size

input : { a: 1, b: 2, c: 3, d: 4 }, size=2

output : [ [["a",1],["b",2]], [["c",3],["d",4]] ]

*/

// solution :

const input = { a: 1, b: 2, c: 3, d: 4 };
const size = 2;

const inputArr = Object.entries(input);

const ans = inputArr.reduce((acc, curr) => {
  let lastBox = acc[acc.length - 1];
  if (!lastBox || lastBox.length == size) {
    acc.push([curr]);
  } else {
    lastBox.push(curr);
  }

  return acc;
}, []);

console.log(ans);