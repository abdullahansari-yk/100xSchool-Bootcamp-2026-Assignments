/*
  Write a function `getUniqueElements` which takes an array as input and returns a new array containing only the unique elements from the input array.

  What are unique elements?
  - Elements that appear only once in the array or the first occurrence of each element in case of duplicates.

  Example:
  - Input: [10, 20, 30, 10, 40, 20]
  - Output: [10, 20, 30, 40]

  - Input: [1, 2, 3, 4, 5]
  - Output: [1, 2, 3, 4, 5]

  - Input: []
  - Output: []

*/

// solution 1: using Set Object
function getUniqueElements(arr) {
  const seen = new Set();
  const duplicate = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) {
      duplicate.add(arr[i]);
    } else {
      seen.add(arr[i]);
    }
  }
  return [...seen];
}

const input = [1, 2, 4, 2, 3, 4, 5, 5];

const ans = getUniqueElements(input);
console.log(ans);

// solution 2 : using basics

function getUniqueElements2(array) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (!newArr.includes(array[i])) {
      newArr.push(array[i]);
    }
  }

  return newArr;
}

const ans2 = getUniqueElements2(input);

console.log(ans2);
