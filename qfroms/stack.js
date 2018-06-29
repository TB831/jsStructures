class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record); // Empty array
  }

  pop() {
    return this.data.pop(); // Pushes a record from the stack
  }

  peek() {
    return this.data[this.data.length - 1]; // Access the last element without removing
  }
}

module.exports = Stack;
