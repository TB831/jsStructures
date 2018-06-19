// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed
}

// Solution #2
// function palindrome(str) {
//   return str.split('').every((char, i) => { // Doing a double comparison. comparing first element to the last until it reaches the middle.
//     return char === str[str.length - i - 1]; // Keeps returning true until false
//   });
// }

module.exports = palindrome;
