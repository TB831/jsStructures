// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {}
  str.split('').map(char => {
    chars[char] = chars[char] + 1 || 1
  });
  return Object.keys(chars).reduce((a, b) => {
    return chars[a] > chars[b] ? a : b;
  });
}

// Solution #2
// function maxChar(str) {
//   const chars = {}  // Empty Object
//   let max = 0;  // Value of Object
//   let maxChar = ''; // Key to Value
//
//   for (let char of str) { // Loop to iterate through the str
//     if (chars[char]) {  // If Char in Chars exists
//       chars[char]++;  // Increment
//     } else {
//       chars[char] = 1;  // Set to 1
//     }
//   }
//
//   for (let char in chars) { // Loop specific to iterate through an object. Char becomes keys of the object
//     if (chars[char] > max) {  // If Char is > Max
//       max = chars[char];  // Set Max to that value
//       maxChar = char; // Set MaxChar to that key
//     }
//   }
//
//   return maxChar;
// }

module.exports = maxChar;
