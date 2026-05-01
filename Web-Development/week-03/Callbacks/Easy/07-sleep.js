// Problem Description – sleep(ms, callback)
//
// You are required to write a function named sleep that accepts a time duration
// in milliseconds and a callback function.
// The function should wait for the specified time and then invoke the callback.

function somefunc() {
  console.log("callback run successfully!");
}

function sleep(ms, callback) {
  setTimeout(callback, ms);
}

sleep(2000, somefunc);
