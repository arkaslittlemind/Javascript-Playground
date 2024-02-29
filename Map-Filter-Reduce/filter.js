// Filter array operation- 
// 2. filter() method creates a new array with all elements that pass the test implemented by the provided function.

const nums = [1, 2, 3, 4, 5];

const numsGreaterThan3 = nums.filter((num) => {
    return num > 3;
})

console.log(numsGreaterThan3); // [4, 5]