// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  let slow = list.getFirst(); // Retrieve the first node of the list
  let fast = list.getFirst(); // Retrieve the first node of the list

  while (fast.next && fast.next.next) { // While there is 2 & 1 nodes ahead of fast
    slow = slow.next; // Move slow to the next node
    fast = fast.next.next;  // Move fast to the next 2 nodes
  }
  return slow;  // Once the while loop finishes, we must be at the midpoint
}

module.exports = midpoint;
