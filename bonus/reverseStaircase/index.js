// --- Directions
//  Given a function that accepts an integer, create a staircase where height and base are equal to n.
//  The image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

function staircase(n) {
    const line = Array(n + 1).fill(' ');    // Creates an array of spaces, length n+1
    for (let row=n-1; row>=0; row--) {
        line[row] = '#';
        console.log(line.join(''));
    }
}
