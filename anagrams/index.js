// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const charMapA = buildCharMap(stringA); // Build charMap object with String A
  const charMapB = buildCharMap(stringB); // Build charMap object with String B

  if (objectKeyLength(charMapA) !== objectKeyLength(charMapB)) {  // Condition: If object key lengths are equivalent
    return false;
  }

  for (let char in charMapA) {  // For in loop, loops over objects
    if (charMapA[char] !== charMapB[char]) {  // If char aren't equivalent
      return false;
    }
  }
  return true;  // Return true if anagrams;
}

buildCharMap = (str) => {
  const chars = {}; // Chars objects
  let a = str.replace(/[^\w]/g, '').toLowerCase();  // Regex to avoid special chars and convert to lower case
  a.split('').map(char => { // Convert to charArray, loop over each char
    chars[char] = chars[char] + 1 || 1; //  If Chars[char] exist increment else set to 1
  });
  return chars;
}

objectKeyLength = (obj) => {
  return Object.keys(obj).length;
}

module.exports = anagrams;
