/*
  Write a function `countCharacters` which takes a string as input and returns an object representing the frequency of each character in the string.

  Example:
  - Input: "hello"
  - Output: { h: 1, e: 1, l: 2, o: 1 }

  - Input: "aabbcc"
  - Output: { a: 2, b: 2, c: 2 }

  - Input: ""
  - Output: {}

*/
const input = "Hello";

// solution 1 using simple for loop

const countCharacters = (str) => {
  let result = {};

  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    // console.log(char);
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  //   console.log(result)
  return result;
};
const ans1 = countCharacters(input);
console.log(ans1);

// solution 2: using for of loop

function countCharacters2(string) {
  const Obj = {};

  for (let char of string) {
    Obj[char] = (Obj[char] || 0) + 1;
    // console.log(Obj)
  }

  return Obj;
}
const ans2 = countCharacters2(input);
console.log(ans2);
