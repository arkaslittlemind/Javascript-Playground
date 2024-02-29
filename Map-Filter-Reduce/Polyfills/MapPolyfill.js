//Polyfill for Map Array Method
// 1. Create a function called mapPolyfill() that takes a callback function as an argument.
// 2. Create a new array.
// 3. Loop through the calling array.
// 4. Call the provided function on every element in the calling array.
// 5. Push the result of the provided function to the new array.
// 6. Return the new array.
// 7. Call the mapPolyfill() function with the provided callback function.
// 8. Print the result.


// Map Syntax- 
// array.map(function(currentValue, index, arr), thisValue)

Array.prototype.mapPolyfill = function(callback) {
    let newArray = [];
    for(let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray;
}


const nums = [1, 2, 3, 4, 5];

const multiplyBy3 = nums.mapPolyfill((num) => {
    return num * 3;
})

console.log(multiplyBy3);

