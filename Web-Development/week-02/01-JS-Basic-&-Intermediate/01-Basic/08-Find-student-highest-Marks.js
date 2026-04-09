/* 
    input={ A: [80, 90], B: [70, 75, 85] }
    ouput= A
*/

// solution :

const student = { A: [81, 90], B: [82, 90], C: [1000,90] };

const studnetArr = Object.entries(student);

// console.log(studnetArr)g

const studentAverage = studnetArr.map((entry) => {
  // console.log(entry)
  const name = entry[0];
  const marks = entry[1];

  // console.log(name)
  // console.log(marks)

  const sum = marks.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  // console.log(sum)

  const average = sum / marks.length;
  // console.log(average)

  return [name, average];
});

// console.log(studentAverage);

// const ans = studentAverage
//   .reduce((champion, challenger) => {
//     return challenger[1] > champion[1] ? challenger : champion;
//   })
//   .at(0);

const ans = studentAverage.reduce((champion, challenger) => {
  return challenger[1] > champion[1] ? challenger : champion;
})[0];

console.log(ans);
