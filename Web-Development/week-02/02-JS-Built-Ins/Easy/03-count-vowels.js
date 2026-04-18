/*
  Write a function `countVowels` which takes a string as input and returns the count of vowels (both uppercase and lowercase) in the string.

  What are vowels?
  - Vowels are the characters: a, e, i, o, u (case-insensitive).

  Example:
  - Input: "hello world"
  - Output: 3

  - Input: "AEIOUaeiou"
  - Output: 10

  - Input: "xyz"
  - Output: 0

  - Input: ""
  - Output: 0

*/

// const input = "This is a test sentence";
const input = "Programming";

// solution 1 : using for of and if condition
function countVowels(str) {
  let counter = 0;
  for (let char of str) {
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u" ||
      char == "A" ||
      char == "E" ||
      char == "I" ||
      char == "O" ||
      char == "U"
    ) {
      counter++;
    }
  }
  return counter;
}

const ans = countVowels(input);
// console.log(ans);

// solution 2 : using

function countVowels2(str) {
  let counter = 0;
  const vowel1 = "aeiou";
  const vowel2 = "AEIOU";

  for (let char of str) {
    if (vowel1.includes(char) || vowel2.includes(char)) {
      counter++;
    }
  }
  return counter;
}

const ans2 = countVowels2(input);
console.log(ans2);
