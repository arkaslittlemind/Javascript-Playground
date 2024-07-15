// Filter array operation- 
// 2. filter() method creates a new array with all elements that pass the test implemented by the provided function.

const nums = [1, 2, 3, 4, 5];

// const numsGreaterThan3 = nums.filter((num) => {
//     return num > 3;
// })

// console.log(numsGreaterThan3); // [4, 5]

// Given an input array of numbers, return a new array containing only even numbers

// approach 1
const newArray = [];
for(let i = 0; i < nums.length; i++) {
    if(nums[i] % 2 === 0) {
        newArray.push(nums[i]);
    }
}

// console.log(newArray);

// approach 2 - clean way

const evenNumbers = nums.filter(function(arr) {
    return arr % 2 === 0;
})

console.log(evenNumbers); // [2, 4]
