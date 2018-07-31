// --- Directions
//  Complete the function compareTriplets in the editor below. It must return an array of two integers, the first being Alice's score and the second being Bob's.

function compareTriplets(a, b) {
    let aValue = 0;
    let bValue = 0;
    for (let i=0; i<a.length; i++) {
        if (a[i] > b[i]) {
            aValue++;
        }
        if (a[i] < b[i]) {
            bValue++;
        }
    }
    return [aValue, bValue];
}
