/* 
question : Capitalize string values inside object
input : { name: "alice", city: "delhi" }
ouput: { name: "Alice", city: "Delhi" }

*/

const input = { name: "alice", city: "delhi" };

const inputArr = Object.entries(input);

const ouput = inputArr.map((entry) => {
  const name = entry[0];
  const value =
    entry[1].toLocaleString().charAt(0).toUpperCase() +
    entry[1].toLocaleString().slice(1);

  return [name, value];
});

const ans = Object.fromEntries(ouput);
console.log(ans);
