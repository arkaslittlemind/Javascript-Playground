// Polyfill for Filter array method
// 1. Create a function called filterPolyfill() that takes a callback function as an argument.
// 2. Create a new array.
// 3. Loop through the calling array.
// 4. Call the provided function on every element in the calling array.
// 5. If the result of the provided function is true, push the element to the new array.
// 6. Return the new array.
// 7. Call the filterPolyfill() function with the provided callback function.
// 8. Print the result.

Array.prototype.filterPolyfill = function(callback) {
    let newArray = [];
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}

const nums = [1, 2, 3, 4, 5];

const greaterThan3 = nums.filterPolyfill((nums) => {
    return nums > 3;
})

console.log(greaterThan3); // [4, 5]