/*
  Write a function `nonrepeat` which takes a string as input and returns the first non-repeating character in the string.

  What is a non-repeating character?
  - A character that appears only once in the entire string.

  Example:
  - Input: "abcab"
  - Output: "c"

  - Input: "aabbcc"
  - Output: null

  - Input: "abcdef"
  - Output: "a"

  - Input: ""
  - Output: null

*/

function nonrepeat(str) {
  const count = {};
  for (let char of str) {
    if (count[char]) {
      count[char] += 1;
    } else {
      count[char] = 1;
    }

    // or
    // count[char] = (count[char] || 0) + 1;
  }
  // console.log(count);

  for (let char of str) {
    if (count[char] === 1) {
      return char;
    }
  }
  return null;
}

const input = "a!b@c#d$a";

const ans = nonrepeat(input);

console.log(ans);
