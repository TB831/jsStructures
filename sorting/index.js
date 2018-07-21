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
  return arr;
}

function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort };
