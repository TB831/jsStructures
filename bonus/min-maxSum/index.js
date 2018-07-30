// --- Directions
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.
// For example, arr = [1, 3, 5, 7, 9]. Our minimum sum is 1+3+5+7=16 and our maximum sum is 3+5+7+9= 24. We would print 26 24

miniMaxSum = (arr) => {
    const myArr = arr.map((element) => {
        return arr.reduce(((acc, num) => acc + num), -element);
    });
    myArr.sort();
    return [myArr[0], myArr[myArr.length - 1]];
}

input = [396285104, 573261094, 759641832, 819230764, 364801279];
input1 = [1, 2, 3, 4, 5];
input2 = [140638725, 436257910, 953274816, 734065819, 362748590];

miniMaxSum(input);
