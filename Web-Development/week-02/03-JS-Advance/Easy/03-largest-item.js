/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    // console.log(numbers[i]);
    if (max < numbers[i]) {
      max = numbers[i];
    }
  }
  return max;
}

const input = [3, 7, 2, 9, 1];
const ans = findLargestElement(input);

console.log(ans);
