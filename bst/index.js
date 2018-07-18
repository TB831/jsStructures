// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.left) {  // If incoming data is < this.data and if a left node is present
      this.left.insert(data); // Recurse and insert a node at that location
    } else if (data < this.data) {  // If data < this.data
      this.left = new Node(data); // Create a new node below the left most node
    } else if (data > this.data && this.right) {  // If incoming data is > this.data and if a right node is present
      this.right.insert(data);  // Recurse and insert node at that location
    } else if (data > this.data) {  // // If data > this.data
      this.right = new Node(data);  // Create a new node below the right most node
    }
  }

  contains(data) {
    if (this.data === data) { // If current node equals searched node
      return this;  // Returns current node
    }

    if (this.data < data && this.right) { // If current node < searched node and there is a right node present
      return this.right.contains(data); // Recurse and continue down left side of the tree till found data
    } else if (this.data > data && this.left) { // If current node > searched node and there is a right node present
      return this.left.contains(data);  // Recurse and continue down right side of the tree till found data
    }
    return null;  // Checks failed, no matching node
  }
}

module.exports = Node;
