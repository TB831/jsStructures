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
  constructor() {
    this.head = null; // Represents the head node of a linked list
  }

  insertFirst(data) { // Adds a new node to the linked list
    this.head = new Node(data, this.head) //  Points head to newely added node
  }
}

module.exports = { Node, LinkedList };
