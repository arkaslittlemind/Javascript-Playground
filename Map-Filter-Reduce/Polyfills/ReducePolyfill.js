//Polyfill for Reduce array method
// 1. Create a function called reducePolyfill() that takes a callback function and an initial value as arguments.
// 2. Create a variable called accumulator and set it equal to the initial value.
// 3. Loop through the calling array.
// 4. Call the provided function on every element in the calling array.
// 5. Set the accumulator equal to the result of the provided function.
// 6. Return the accumulator.
// 7. Call the reducePolyfill() function with the provided callback function and initial value.
// 8. Print the result.

Array.prototype.reducePolyfill = function (callback, initialValue) {
    var accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? callback(accumulator, this[i], i, this) : this[i];
    }
    return accumulator;
};


const nums = [1, 2, 3, 4, 5];

const sum = nums.reducePolyfill((accumulator, currentValue, i, array) => {
    return accumulator + currentValue;
}, 0);

console.log(sum);  