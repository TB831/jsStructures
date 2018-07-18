// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const arr = [root, 's'];  // Array that contains the root node, and s char as a marker/token of when to stop
  const widths = [0]; // Array that keeps track of how many nodes at the level

  while (arr.length > 1) {  // Aslong as array has something present
    const node = arr.shift();

    if (node === 's') { // If we reach our marker/token
      widths.push(0); // Add 0 to widths array
      arr.push('s');  // Add s marker/token to arr
    } else {
      arr.push(...node.children)  // Adds all the children to array
      widths[widths.length - 1]++; // Increment the current widths counter
    }
  }
  return widths;
}

module.exports = levelWidth;
