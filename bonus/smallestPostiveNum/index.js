// --- Directions
// Given an array of integers, return the smallest postive
// integer (greater than 0) that does not occur in arr.
// For example, given Arr = [1,3,6,4,1,2], the function should return 5.
// Given Arr = [1,2,3], return 4.
// Given Arr = [-1,-2], return 1.

smallestPostiveNum = (arr) => {
  arr.sort();
  let counter = 0;
  let num = 0;
  for (let i=1; i<arr.length; i++) {
    if (arr[i] > arr[counter] && arr[counter] > 2) {
      num = arr[counter] + 1;
    }
    else if (arr[counter] < 0) {
      num = 1;
    } else {
      num = arr[arr.length - 1] + 1;
    }
    counter++;
  }
  return num;
}

input = [1,3,6,4,1,2];
input1 = [1,2,3];  // 1,1,2,3,4,6
input2 = [-1, -2];
mySolution(input);
