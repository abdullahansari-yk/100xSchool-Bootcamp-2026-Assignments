/* 
    question: count how many times a particular word has occured in array
     input= ["apple", "banana", "apple", "orange", "banana", "apple"]
     output : { apple: 3, banana: 2, orange: 1 }
*/

/*  
solution : 
*/
const input = ["apple", "banana", "apple", "orange", "banana", "apple"];

const Obj = input.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(Obj);
