// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = []; // Empty array
  for (let element of array) {
    const last = chunked[chunked.length - 1]; // Grabs last element of chunked
    if (!last || last.length === size) { // If last doesnt exist || last length === size
      chunked.push([element]); // Push new chunk and current element
    } else {
      last.push(element); // Push last element
    }
  }
  return chunked;
}

// Solution #2
// function chunk(array, size) {
//   const chunked = []; // Empty array
//   let index = 0;  // Index counter
//   while(index < array.length) { // While index is < array length
//     chunked.push(array.slice(index, index + size)); // Push slice of array from index to index+size
//     index += size;  // Increment the index by adding size
//   }
//   return chunked;
// }

module.exports = chunk;
