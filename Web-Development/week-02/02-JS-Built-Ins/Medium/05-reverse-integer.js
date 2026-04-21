/*
  Write a function `reverseInteger` which takes an integer as input and returns the integer with its digits reversed. If the input is negative, the reversed integer should also be negative.

  What is reversing an integer?
  - Reversing an integer means rearranging its digits in the opposite order while maintaining its sign.

  Example:
  - Input: 123
  - Output: 321

  - Input: -456
  - Output: -654

  - Input: 100
  - Output: 1

  - Input: 0
  - Output: 0

*/

function reverseInteger(n) {
  let num = 0;
  while (n != 0) {
    num = num * 10 + (n % 10);
    n = parseInt(n / 10);
  }
  console.log(num);
}

const input = -31;

reverseInteger(input);
