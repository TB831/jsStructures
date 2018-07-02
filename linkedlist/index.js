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

  size() {
    let counter = 0;
    let node = this.head;
    while (node) {  // If a node exist
      counter++;
      node = node.next; // Look onto the next node, if Null break
    }
    return counter;
  }

  getFirst() {
    return this.head; // Return the first node of the linked list
  }

  getLast() {
    if (!this.head) { // If there is no node
      return null;  // Return null
    }
    let node = this.head;
    while (node) {  // If a node exist
      if (!node.next) { // If there is no next node, then were at the end of the list
        return node;  // Return ending node
      }
      node = node.next; // Continue through next node
    }
  }
}

module.exports = { Node, LinkedList };
