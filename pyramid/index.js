// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2); // Midpoint of a level ex. [0, 1, 2, 3, 4] = 2
//   for (let row = 0; row < n; row++) { // Iterate through n number of rows
//     let level = ''; // Empty string for levels
//     for (let col = 0; col < 2 * n - 1; col++) { // Iterate through 2*n-1
//       if (midpoint - row <= col && midpoint + row >= col) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }

// Solution #2 Recursive
function pyramid(n, row=0, level='') {
  if (row === n){ // Base case for recursion
    return;
  }

  if (level.length === 2*n-1) { // 2*n-1 is the relationship to determine # of cols
    console.log(level); // Log the level
    return pyramid(n, row+1)  // Recurse
  }

  const midpoint = Math.floor((2*n-1) / 2); // Calculates the midpoint of a row
  let add; // Contain the char that we're supposed to add to our level
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}

module.exports = pyramid;
