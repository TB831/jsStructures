// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution #2
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB); // Checks if strings are equivalent
}

cleanString = (str) => {
  return str
    .replace(/[^w]/g, '') // Regex to avoid special chars
    .toLowerCase()  // Convert string to lower case
    .split('')  // Convert to charArray
    .sort() // Sort charArray
    .join('') // Join together in a string
}


module.exports = anagrams;
