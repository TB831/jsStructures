// --- Directions
// You are in-charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age.
// When she blows out the candles, she’ll only be able to blow out the tallest ones.
// Your task is to find out how many candles she can successfully blow out.

// For example, if your niece is turning 4 years old, and the cake will have 4  candles of height 3, 2, 1, 3, she will be able to blow out 2 candles successfully, since the tallest candle is of height  and there are  such candles.

function birthdayCakeCandles(ar) {
    const candles = {}
    let max = 0;
    ar.map(candle => {
        candles[candle] = candles[candle] + 1 || 1;
    });
    for (let candle in candles) {
        if (candles[candle] > max) {
            max = candles[candle];
        }
    }
    return max;
}
