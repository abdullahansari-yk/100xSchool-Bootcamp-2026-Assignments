/* 
Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats -

 - HH:MM::SS (Eg. 13:45:23)
 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

*/

/*
let count = 0;
setInterval(() => {
  console.log(new Date().toLocaleTimeString());
  console.log(new Date().toTimeString());
}, 1 * 1000);
*/

function showTime() {
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let hh = String(hours).padStart(2, "0");
  let mm = String(minutes).padStart(2, "0");
  let ss = String(seconds).padStart(2, "0");

  // 24 hour format
  const time24 = `${hh}:${mm}:${ss}`;
  //   console.log(time24)

  //   12 hour format
  let periods = hours >= 12 ? "PM" : "AM";
  let hour12 = hours % 12;
  if (hour12 === 0) hour12 = 12;

  let hh12 = String(hour12).padStart(2, "0");

  const time12 = `${hh12}:${mm}:${ss} ${periods}`;
  //   console.log(time12)

  console.log(`24 hours format: ${time24}`);
  console.log(`12 hours format: ${time12}`);
  console.log("*************")

  setTimeout(showTime, 1 * 1000);
}

showTime();
