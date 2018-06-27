// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
  const weave = new Queue();
  while (sourceOne.peek() || sourceTwo.peek()) {  // While sourceOne or sourceTwo have elements
    if (sourceOne.peek()) { // If sourceOne has an element
      weave.add(sourceOne.remove());  // Add it to the weave
    }

    if (sourceTwo.peek()) { // If sourceTwo has an element
      weave.add(sourceTwo.remove());  // Add it to the weave
    }
  }
  return weave;
}

module.exports = weave;
