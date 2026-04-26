/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

*/

function countVowels(str) {
  const vowels = "aeiou";
  const vowelS2 = "AEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char) || vowelS2.includes(char)) {
      count++;
    }
  }
  return count;
}

const input = "Keep smiling, boo.";
const ans = countVowels(input);

console.log(ans);
