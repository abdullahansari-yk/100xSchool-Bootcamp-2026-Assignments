/*
    question : Count even and odd numbers in array
    input = [1,2,3,4,5,6]
    output = { even: 3, odd: 3 }

*/

// solution : use reduce becoz we are counting and returning single value

const input = [1, 2, 3, 4, 5, 6];

const startValue = { even: 0, odd: 0 };

const ans = input.reduce((acc, curr) => {
  let even = 0;
  let odd = 0;
  if (curr % 2 == 0) {
    // acc.even += 1;
    acc.even++;
  } else {
    // acc.odd += 1;
    acc.odd++;
  }

  return acc;
}, startValue);

console.log(ans);