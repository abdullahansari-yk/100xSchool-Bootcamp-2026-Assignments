/*
  Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
  During this time the thread should not be able to do anything else.
 the function should return a promise just like before
 */
console.log("Hello");

function haltTheThread(n) {
  return new Promise((resolve, reject) => {
    let start = Date.now();

    while (Date.now() - start < n * 1000) {
      // block the thread
    }
    console.log("resolved");
    resolve();
  });
}

haltTheThread(3);

console.log("Hii");
