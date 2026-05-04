// Problem Description – callbackify(fn)
//
// You are required to write a function named callbackify that takes a function
// which returns a Promise.
// The function should return a new function that accepts a callback as its
// last argument.
// When the Promise resolves, the callback should be called with `(null, data)`.
// When the Promise rejects, the callback should be called with the error.

function callbackify(fn) {
  return function (...arguments) {
    const callback = arguments.pop();
    // console.log(callback);

    fn(...arguments)
      .then((data) => callback(null, data))
      .catch((err) => callback(err));
  };
}

function addNumbers(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a != "number" || typeof b != "number") {
      reject("Invalid Input");
    } else {
      setTimeout(() => {
        resolve(a + b);
      }, 2000);
    }
  });
  // return new Promise((resolve) => resolve("Hello"));
}

const CBFunc = callbackify(addNumbers);

CBFunc(2, 3, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
