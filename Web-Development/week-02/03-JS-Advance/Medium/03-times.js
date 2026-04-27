/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
  const start = Date.now();
  console.log(start)
  // const start = performance.now();
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  const end = Date.now();
  console.log(end)
  // const end = performance.now();
  const timeTaken = end - start;

  console.log("sum: ", sum);
  console.log("time taken: c", timeTaken, "milliseconds");
}

calculateTime(100);
// calculateTime(100000);
// calculateTime(1000000000);
