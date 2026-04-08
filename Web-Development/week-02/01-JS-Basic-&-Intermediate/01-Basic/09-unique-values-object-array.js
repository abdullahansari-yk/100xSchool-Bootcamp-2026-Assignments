/*
question: combine all arrays and remove duplicates 

input = { x: [1,2,3], y: [2,3,4], z: [4,5] }
output = [1,2,3,4,5]

*/

// solution : use flat and set

const input = { x: [1, 2, 3], y: [2, 3, 4], z: [4, 5] };

const arr = Object.values(input).flat();
// console.log(arr);

const ans=[...new Set(arr)];
console.log(ans)
