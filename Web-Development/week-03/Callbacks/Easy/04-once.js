// Problem Description – once(fn)
//
// You are required to implement a wrapper function named once that accepts a
// callback-based asynchronous function `fn`.
// The wrapper should ensure that `fn` is executed only on the first call.
// Any subsequent calls should not re-execute `fn` and should instead invoke
// the callback with the same result (or error) from the first invocation.

function once(fn) {
  let called = false;
  let error;
  let result;
  let pendingCallbacks = [];

  return function (...args) {
    const cb = args.pop();

    if (called) {
      return cb(error, result);
    }

    pendingCallbacks.push(cb);

    if (pendingCallbacks.length === 1) {
      fn(...args, (err, res) => {
        called = true;
        error = err;
        result = res;

        pendingCallbacks.forEach((callback) => callback(error, result));
      });
    }
  };
}

function asyncTask(x, cb) {
  setTimeout(() => {
    console.log("Function executed");
    cb(null, x * 2);
  }, 2000);
}

const onceTask = once(asyncTask);

onceTask(5, (err, res) => console.log("Call 1: ", res));
onceTask(10, (err, res) => console.log("Call 2: ", res));
onceTask(15, (err, res) => console.log("Call 3: ", res));
