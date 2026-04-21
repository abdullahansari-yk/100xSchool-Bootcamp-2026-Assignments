/*
  Write a function `getPrimesUpTo100` which returns an array of all prime numbers up to 100.

  What is a prime number?
  - A prime number is a number greater than 1 that has no divisors other than 1 and itself.

  Example:
  - Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

  - Input: There is no input, the function returns an array of primes.

  - Input: N/A

*/
function checkPrime(n) {
  let factor = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      factor++;
    }
  }
  return factor;
}
function getPrimesUpTo100() {
  let arr = [];
  for (let i = 1; i <= 100; i++) {
    if (checkPrime(i) == 2) {
      arr.push(i);
    }
  }

  return arr;
}

const ans = getPrimesUpTo100();

console.log(ans);
