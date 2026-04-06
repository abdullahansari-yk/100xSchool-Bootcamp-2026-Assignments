/*
    input={ fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }

    output: ["apple", "banana", "carrot", "pea"]
*/

// solution 1 : Use flat()

const input = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] };


const arr = Object.values(input).flat();
console.log(arr);
