// Problem Description – rejectAfter(ms, callback)
//
// You are required to create a function named rejectAfter that accepts a time
// duration in milliseconds and a callback function.
// The function should wait for the specified time and then invoke the callback
// with an error.

function secondFunc(err) {
  console.log(err);
}

function rejectAfter(ms, callback) {
  setTimeout(() => {
    callback(new Error(`This is error message after ${ms} milliseconds`));
  }, ms);
}

rejectAfter(2000, secondFunc);
