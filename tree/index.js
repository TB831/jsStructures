// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data; // Data for the node
    this.children = []; // Array that holds the children to that node
  }

  add(data) {
    this.children.push(new Node(data)); // Create a new node and push it into children array
  }

  remove(data) {
    this.children = this.children.filter(node => {  // Filter to loop through each node
      return node.data !== data;  // With filter return true if you want to keep, return false if you want to remove
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const arr = [this.root]; // Create a new array, with the root node as first element
    while (arr.length) {  // While array has an element
      const node = arr.shift(); // Removes the first element of the array
      node.children.map(child => {  // Loop over each children
        arr.push(child);  // Push into arr
      })
      fn(node);
    }
    return arr;
  }
}

module.exports = { Tree, Node };
