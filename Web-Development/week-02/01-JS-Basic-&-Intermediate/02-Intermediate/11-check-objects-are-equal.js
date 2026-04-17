/*
question : Check if two objects are deeply equal
input : { a: { x: 1, y: 2 } }, { a: { x: 1, y: 2 } }

output : true

*/

// solution :

const input1 = { a: { x: 1, y: 2 } };
const input2 = { a: { x: 1, y: 3} };

function check(obj, count) {
  for (let key in obj) {
    if (typeof obj[key] == "object") {
      count++;
      count = check(obj[key], count);
    }
  }
  return count;
}
let count = 0;
const ans1 = check(input1, count);
const ans2 = check(input2, count);

if (ans1 == ans2) {
  console.log(true);
} else {
  console.log(false);
}
