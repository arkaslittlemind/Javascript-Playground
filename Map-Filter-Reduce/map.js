// Map Array Method-
// 1. map() method creates a new array with the results of calling a provided function on every element in the calling array.

const nums = [1, 2, 3, 4, 5];

const multiplyBy3 = nums.map((num, i, array) => {
    return num * 3;
})

console.log(multiplyBy3); // [3, 6, 9, 12, 15]

const nums1 = [1, 2, 3, 4, 5];

const multiplyBy3_1 = nums.map((num, i, array) => {
    return num * 3 + i;
})

console.log(multiplyBy3_1); // [3, 7, 11, 15, 19]