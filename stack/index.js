// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
  constructor() {
    this.data = []; // Empty array
  }

  push(record) {
    this.data.push(record); // Pushes a record from the stack;
  }

  pop() {
    return this.data.pop(); // Pop a record from the stack;
  }

  peek() {
    return this.data[this.data.length - 1]; // Access the last element without removing
  }
}

module.exports = Stack;
