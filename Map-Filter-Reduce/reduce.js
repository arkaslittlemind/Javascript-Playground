// Reduce array operation-
// The reduce() method applies a
// function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

const nums = [1, 2, 3, 4, 5];

const sum = nums.reduce((accumulator, current, i, array) => {
    return accumulator + current;
}, 0)

console.log(sum); // 15