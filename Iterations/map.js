const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.map((num) => {
//     if(num > 4) {
//         return num + 10;
//     } else {
//         return num + 1;
//     }
// })


// Chaining map and filter
const newNums = myNums
.map((num) => num * 10)
.map((num) => num + 1)
.filter((num) => num >= 40);

console.log(newNums); // [ 41, 51, 61, 71, 81, 91, 101 ]
