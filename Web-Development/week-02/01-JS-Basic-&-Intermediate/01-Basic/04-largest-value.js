/* 

    Input= { a: 10, b: 50, c: 20 };
    output= b

*/

// solution: use reduce since we one only single output and there is no array or object in the output.

const input = { a:220, b: 50, c: 200 ,d:20};

const result = Object.entries(input).reduce((maxKey, [key, value]) => {
  console.log(input[maxKey]);
  return value > input[maxKey] ? key : maxKey;
}, Object.keys(input)[0]);

console.log(result);
