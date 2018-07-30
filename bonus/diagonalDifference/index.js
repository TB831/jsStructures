// --- Directions
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// For example, the square matrix Arr is shown below:
// 1 2 3
// 4 5 6
// 7 8 9

// The left-to-right diagonal = 1+5+9. The right to left diagonal = 3+5+9. Their absolute difference is |15 - 17| = 2.

diagonalDifference = (arr) => {
    let countInc = 0;
    let countDec = arr.length-1;
    let leftD = 0;
    let rightD = 0;
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<arr.length; j++) {
            if (j === countInc) {
                leftD += arr[i][j];
            }
            if (j === countDec) {
                rightD += arr[i][j];
            }
        }
        countInc++;
        countDec--;
    }
    return Math.abs(leftD - rightD);
}
