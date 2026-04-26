/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

*/

function isPalindrome(string) {
  let str = string.toLowerCase().replace(/[^A-z0-9]/g, "");
  //   console.log(str)

  let val = "";
  let val2 = "";
  for (let i = 0; i < str.length; i++) {
    val += str[i];
  }
  for (let i = str.length - 1; i >= 0; i--) {
    val2 += str[i];
  }
  // console.log(val);
  // console.log(val2);

  if (val == val2) {
    return true;
  } else {
    return false;
  }
}

let input = "hello";
const ans = isPalindrome(input);

console.log(ans);
