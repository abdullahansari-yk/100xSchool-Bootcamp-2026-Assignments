/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function promisifiedSettimeout(n) {
  return new Promise((resolves, reject) => {
    setTimeout(() => {
      resolves();
    }, n * 1000);
  });
}

const input = 10;
promisifiedSettimeout(input);