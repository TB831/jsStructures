// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let row = 0; row < n; row++) { // Iterate through n number of rows
    let stair = ''; // Empty string
    for (let col = 0; col < n; col++) { // Iterate through n number of cols
      if (col <= row) { // If
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}

// Solution #2
// function steps(n, row=0, stair='') {
//   if (n === row) {
//     return;
//   }
//   if (n === stair.length) { // When we hit the end of a row console.log stairs
//     console.log(stair);
//     return steps(n, row+1); // Increment row
//   }
//
//   if (stair.length <= row) {  // When stair.length is <= row we add #
//     stair += '#';
//   } else {
//     stair += ' '; // Else space
//   }
//
//   steps(n, row, stair);
// }


module.exports = steps;
