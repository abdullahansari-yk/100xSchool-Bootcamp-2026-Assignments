// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("fs");
/* this is how you read file "Synchronously" */
// const data = fs.readFileSync("fakefile.txt", "utf-8");
// console.log(data);

/* but we need to use it "asynchronously" */
function fileContent(err, content) {
  console.log(content);
}
fs.readFile("fakefile.txt", "utf-8", fileContent);

let sum = 0n;
for (let i = 1n; i < 100000000; i++) {
  sum += i;
}
console.log(sum);
let sum2 = 0n;
for (let i = 1n; i < 100000000; i++) {
  sum2 += i;
}
console.log(sum2);
