/*
question : Find longest string among object values

input : { a: "apple", b: "banana", c: "kiwi" }

ouput : banana

*/

// solution :

const input = { a: "apple", b: "banana", c: "kiwi" };

const value = Object.values(input);

const val = value.reduce((acc, curr) => {
  return curr.length > acc.length ? curr : acc;
});

console.log(val);
