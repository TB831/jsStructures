// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let slow = list.getFirst(); // Retrieve the first node of the list
  let fast = list.getFirst(); // Retrieve the first node of the list
  for (let i = 0; i < n; i++) { // Manual for loop to move fast n number of nodes
    fast = fast.next;
  }

  while (fast.next) { // While fast next node is present
    slow = slow.next; // Move slow to next node
    fast = fast.next; // Move fast to next node
  }
  return slow;  // Once while loop breaks, we are at n numbers away from tail
}

module.exports = fromLast;
