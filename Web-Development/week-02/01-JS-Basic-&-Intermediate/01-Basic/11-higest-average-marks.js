/* 
Question: Find student with highest average marks

input = { A: [80, 90], B: [70, 75, 85] }
output= A
*/

const input = { A: [80, 90], B: [70, 75, 85] };

const inputArr = Object.entries(input);

// console.log(inputArr)

const studentAverage = inputArr.map((value) => {
  const student = value[0];
  const marksArr = value[1];

  //   console.log(student)
  //   console.log(marksArr)

  const sum = marksArr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  const average = sum / marksArr.length;

  return [student, average];
});

// console.log(studentAverage);

const ans = studentAverage.reduce((acc, curr) => {
  return acc[1] > curr[1] ? acc : curr;
})[0];

console.log(ans);
