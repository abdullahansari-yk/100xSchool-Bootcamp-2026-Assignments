/*
  Write a function `reve` which takes a string as input and returns the reversed version of the string.

  What is reversing a string?
  - Reversing a string means rearranging its characters in the opposite order.

  Example:
  - Input: "Sumana"
  - Output: "anamuS"

  - Input: "hello"
  - Output: "olleh"

  - Input: ""
  - Output: ""

*/

function reverseString(str) {
  let reverse = "";
  let n = str.length;
  //   console.log(n);
  for (let i = n - 1; i >= 0; i--) {
    reverse += str[i];
  }
  //   console.log(reverse);
  return reverse;
}

const input = "hello";
const ans = reverseString(input);

console.log(ans);
