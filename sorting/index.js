// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i=0; i<arr.length; i++) {  // Loop over entire collection
    for (let j=0; j<(arr.length - i - 1); j++) {  // Loop to iterate arr but shrink the window by 1
      if (arr[j] > arr[j+1]) {  // If element at current index is > than the next one
        const lesser = arr[j+1];  // Temp var used for swapping
        arr[j+1] = arr[j];  // swap j+1 with j
        arr[j] = lesser;  // swap j with j+1
      }
    }
  }
  return arr; // Return sorted array
}

function selectionSort(arr) {
  for (let i=0; i<arr.length; i++) {  // Loop over entire collection
    let indexOfMin = i; // Assumption of lowest value at current index
    for (let j=i+1; j<arr.length; j++) {  // Inner loop to i+1
      if (arr[j] < arr[indexOfMin]) { // If theres an element < indexOfMin
        indexOfMin = j; // Assign that element to indexOfMin
      }
    }
    if (indexOfMin !== i) { // If index of current element and index of lowest element aren't equal, swap them
      let lesser = arr[indexOfMin]; // Temp variable to hold lesser index
      arr[indexOfMin] = arr[i]; // Swap indexOfMin with i;
      arr[i] = lesser;  // Swap i with lesser(indexOfMin)
    }
  }
  return arr; // Return sorted array
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const centerIndex = Math.floor(arr.length / 2); // Get the midpoint of arr
  const left = arr.slice(0, centerIndex);  // Slice the array from 0 to center, excludes center index
  const right = arr.slice(centerIndex);  // Slice array from center to end of arr

  return merge(mergeSort(left), mergeSort(right));  // Recurse till left & right array is length. Then call merge function to merge elements into one array
}

function merge(left, right) {
  const results = []; // Empty array to hold final sorted values
  while (left.length && right.length) { // While left and right have elements present
    if (left[0] < right[0]) { // If value in left array is < value in the right
      results.push(left.shift()); // Shift from left array and push into results
    } else {
      results.push(right.shift());  // Shift from right array and push into results
    }
  }
  return [...results, ...left, ...right]; // Create an empty array and append results, left, right together
}

module.exports = { bubbleSort, selectionSort, mergeSort };
