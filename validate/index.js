// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min=null, max=null) { // Set default values for min/max, to begin recursing through each node
  if (max !== null && node.data > max) {  // Validation for node, value should be less than max
    return false;
  }
  if (min !== null & node.data < min) { // Validation for node, value should be greater than min
    return false; // Return false
  }

  if (node.left && !validate(node.left, min, node.data)) {  // If node to left is present and recurse validate and update the max
    return false;
  }
  if (node.right && !validate(node.right, node.data, max)) {  // If node to left is present and recurse validate and update the min
    return false;
  }

  return true;  // If checks fail, node is currently valid
}

module.exports = validate;
