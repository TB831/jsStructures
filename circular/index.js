// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast.next && fast.next.next ) {  // While there is 2 & 1 nodes ahead of fast
    slow = slow.next; // Move slow to the next node
    fast = fast.next.next;  // Move fast to the next 2 nodes
    if (slow === fast) {  // Compare slow node to fast node
      return true;  // If equal, list is circular
    }
  }
  return false; // If the while loop ever breaks, we do not have a circular list
}

module.exports = circular;
