// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  arr = str.toLowerCase().split(''); // Split string into charArray and split by empty space
  arr.reverse(); // Reverse the charArray
  return arr.join([seperator = '']); // Join elements with no spaces
}

module.exports = reverse;

// Solution #2
// function reverse(str) {
//   let reversed = '';  // Empty string declaration
//   for (let char of str) { // For of loop to iterate through each char
//     reversed = char + reversed; // Pushing each char to the string
//   }
//   return reversed;
// }

// Solution #3
function reverse(str) {
  return str
          .split('')  // Split string into charArray and split by empty space
          .reduce((rev, char) => char + rev , ''); // Array helper Reduce. Iterate through each char and add to it Rev.
}
