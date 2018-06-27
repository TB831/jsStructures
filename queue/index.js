// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.data = []  // Empty array
  }

  add(record) {
    this.data.unshift(record);  // Add a record to an array, while maintaining order
  }

  remove() {
    return this.data.pop(); // Removes a record that is at the end of an array
  }
}

module.exports = Queue;
