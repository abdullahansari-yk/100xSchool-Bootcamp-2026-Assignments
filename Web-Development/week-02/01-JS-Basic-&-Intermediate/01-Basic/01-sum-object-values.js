/* 
    question: Sum values in object arrays
    input : { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }
    output : { food: 60, travel: 20, bills: 100 }

*/

// solution: we will use .entries() and fromEntries();
// entries => {} -> []
// fromeEntries => [] -> {}

const input = {
  food: [10, 20, 30],
  travel: [5, 15],
  bills: [40, 60],
};

const arr = Object.entries(input).map(([key, value]) => [
  key,
  value.reduce((acc, curr) => acc + curr, 0),
]);

// console.log(arr);
const obj = Object.fromEntries(arr);

console.log(obj);
