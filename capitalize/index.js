// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  words = []; // Empty array
  str.split(' ').map(word => {  // Split string into array. Loop over each element
    words.push(word[0].toUpperCase() + word.slice(1));  // Get first char and toUpperCase. Slice word at 2nd char. Combine. Push into words array.
  });
  return words.join(' '); // Join words together with spaces
}

// Solution #2
// function capitalize(str) {
//   let result = str[0].toUpperCase(); // Grab first char of string and toUpperCase
//   for (let i = 1; i < str.length; i++) {  // Manual for loop to start at 2nd char of string
//     if (str[i -1] === ' ') {  // If the left of current char is empty space
//       result += str[i].toUpperCase(); // Convert element toUpperCase
//     } else {
//       result += str[i]; // Add current char to result
//     }
//   }
//   return result;
// }

module.exports = capitalize;
