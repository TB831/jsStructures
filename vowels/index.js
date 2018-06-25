// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let vowelCounter = 0; // Initiate counter to 0
  const vowelsChecker = ['a', 'e', 'i', 'o', 'u'];  // Array of vowels to check against
  str.toLowerCase().split('').map(char => { // toLowerCase. Convert to charArray. Loop over each char.
    if (vowelsChecker.includes(char)) { // If char is in vowelsChecker
      vowelCounter++; // Increment
    }
  });
  return vowelCounter;
}

// function vowels(str) {
//   const matches = str.match(/[aeiou]/gi); // Regex to match chars 'aeiou'. /g checks the whole string. /i Ignores case sensitivite, capitals/non capitals
//   return matches ? matches.length : 0;  // Ternary statement
// }

module.exports = vowels;
