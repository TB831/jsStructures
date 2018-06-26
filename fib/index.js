// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) { // Since its a simple for loop, runtime complexity is linear or O(n)
//   const numbers = [0, 1]; // Starting array with numbers 0, 1
//   for (let i = 2; i <= n; i++) {  // Loop to start at numbers[2]
//     const a = numbers[i - 1]; // Starting value is 1. 2-1
//     const b = numbers[i - 2]; // Starting value is 0. 2-2
//     numbers.push(a + b);
//   }
//   return numbers[n];
// }

// Solution #2 Recursive
// function fib(n) {
//   if (n < 2) {
//     return n; // Base case
//   }
//   return fib(n - 1) + fib(n - 2);
// }

// Solution #3 Recursive w/ Memoize to dramatically to store fib function call results
function memoize(fn) {  // Accepts function as parameter
  const cache = {}; // Empty cache object
  return function(...args) {  // ...Args takes in all args and stores as an array
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n; // Base case
  }
  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

module.exports = fib;
