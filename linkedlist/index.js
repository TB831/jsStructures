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

  size() {  // Return the size of the linked list
    let counter = 0;
    let node = this.head;
    while (node) {  // If a node exist
      counter++;
      node = node.next; // Look onto the next node, if Null break
    }
    return counter;
  }

  getFirst() {  // Return the first node
    return this.head; // Return the first node of the linked list
  }

  getLast() { // Return the last node
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

  clear() { // Empties out linked list
    this.head = null; // Set head to null to empty out list
  }

  removeFirst() { // Points to the next node in the list
    if (!this.head) { // If there is no node, return
      return;
    }
    this.head = this.head.next; // Reassign head to the next element
  }

  removeLast() {  // Removes last node in the list
    if (!this.head) { // If list is empty, return
      return;
    }
    if (!this.head.next) {  // If we have a length of 1, remove the first node
      this.head = null;
      return
    }
    let previous = this.head; // Refer to head node
    let node = this.head.next;  // Refer to the second node
    while (node.next) { // While a the next node exist, once you reach a ull node, update previous to current node and advance node
      previous = node;
      node = node.next; // Continue through next node
    }
    previous.next = null; // Once node.next reaches null, update previous.next to null to delete the last node
  }

  insertLast(data) {  // Inserts node at the end of the linked list
    const lastNode = this.getLast();  // Get the last node of the list
    if (lastNode) { // If last node exist
      lastNode.next = new Node(data); // Insert new node at the end
    } else {  // List is empty
      this.head = new Node(data); // Insert node at the head of the list
    }
  }

  getAt(index) {  // Returns a node at given index
    let counter = 0;
    let node = this.head;
    while (node) {  // If a node exist
      if (counter === index) {  // If counter is equal to index
        return node;  // Return the desired node
      }
      counter++;  // Increment
      node = node.next; // Continue through next node
    }
    return null;  // If given index is > than the list return null
  }

  removeAt(index) { // Remove a node at given index
    if (!this.head) { // If list is empty, return
      return;
    }
    if (index === 0) {  // If given index is 0 or list has only 1 node,
      this.head = this.head.next; // Points head to null
      return;
    }
    const previousNode = this.getAt(index-1);  // Gets the previous node, before desired node
    if (!previousNode || !previousNode.next) {
      return;
    }
    previousNode.next = previousNode.next.next; // Leep frogs to get desired node
  }
}

module.exports = { Node, LinkedList };
