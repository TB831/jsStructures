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

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort };
