/*
  Write a function `findDuplicates` which takes an array as input and returns an array containing all the duplicate elements.

  What are duplicates?
  - Elements that appear more than once in the array are considered duplicates.

  Example:
  - Input: [10, 20, 30, 10, 40]
  - Output: [10]

  - Input: [1, 2, 3, 4, 5]
  - Output: []

  - Input: []
  - Output: []

*/

// solution 1 : usng basic for loop and basic logic
function findDuplicates(arr) {
  //   let val = arr[0];
  let newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let val = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (val == arr[j]) {
        newArr.push(val);
      }
    }
  }

  return newArr;
}

const input = [10, 20, 30, 10, 50];
const ans = findDuplicates(input);
console.log(ans);``

// solution 2: using for of and some built in functions

function findDuplicates2(arr) {
  const seen = new Set();
  const duplicate = new Set();

  for (const value of arr) {
    // console.log(value)
    if (seen.has(value)) {
      duplicate.add(value);
    } else {
      seen.add(value);
    }
  }

  return [...duplicate];
}

const ans2 = findDuplicates2(input);
console.log(ans2);
