/* 
quesion: Sort object entries by values (ascending)
input={ a: 3, b: 1, c: 2 }
output= [["b",1], ["c",2], ["a",3]]

*/

// solution :

const input = { c: 2, a: 3, b: 1 };

const inputArr = Object.entries(input);

const ans = inputArr.sort((entryA, entryB) => {
  const valA = entryA[1];

  const valB = entryB[1];

  return valA - valB;
});

console.log(ans);
