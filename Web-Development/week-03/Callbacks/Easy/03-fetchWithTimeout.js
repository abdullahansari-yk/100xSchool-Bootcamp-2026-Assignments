// Problem Description – fetchWithTimeout(url, ms, callback)
//
// You are required to write a function named fetchWithTimeout that accepts a URL,
// a time limit in milliseconds, and a callback function.
// The function attempts to fetch data from the given URL.
// If the request completes within the specified time, the callback is invoked with
// null as the first argument and the fetched data as the second argument.
// If the operation exceeds the time limit, the callback is invoked with an Error
// whose message is "Request Timed Out".

function fetchWithTimeout(url, ms, cb) {
  let isDone = false;
  // start time
  const timer = setTimeout(() => {
    if (!isDone) {
      isDone = true;
      cb(new Error("Request Timed Out"));
    }
  }, ms);

  //   start fetch
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (!isDone) {
        isDone = true;
        clearTimeout(timer);
        cb(null, data);
      }
    })
    .catch((err) => {
      if (!isDone) {
        isDone = true;
        clearTimeout(timer);
        cb(err);
      }
    });
}

const url = "https://randomuser.me/api/";
fetchWithTimeout(url, 480, (err, data) => {
  if (err) {
    console.log("Error :", err);
  } else {
    console.log("Name :", data.results[0].name.first);
  }
});
