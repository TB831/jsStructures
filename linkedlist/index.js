// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next=null) {  // Default next to null, to represent tail of node
    this.data = data; // Data assoiciated with the node
    this.next = next; // Reference to next node in the list
  }
}

class LinkedList {

}

module.exports = { Node, LinkedList };
