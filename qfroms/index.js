// --- Directions
// Implement a Queue data structure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.first = new Stack(); // Create first stack
    this.second = new Stack();  // Create second stack
  }

  add(record) {
    this.first.push(record); // Add a record to the first stack;
  }

  remove() {
    while( this.first.peek()) {  // While there is a value in first stack
      this.second.push(this.first.pop()); // Pushing record to the second stack from the first stack
    }
    const record = this.second.pop(); // Pop from the second stack

    while (this.second.peek()) {
      this.first.push(this.second.pop()); // Restore the state back to first stack by popping from the second and pushing into the first
    }

    return record;
  }

  peek() {
    while (this.first.peek()) {  // While there is a value in first stack
      this.second.push(this.first.pop()); // Pushing record to the second stack from the first stack
    }
    const record = this.second.peek(); // Peek from the second stack

    while (this.second.peek()) {
      this.first.push(this.second.pop()); // Restore the state back to first stack by popping from the second and pushing into the first
    }

    return record;
  }
}

module.exports = Queue;
