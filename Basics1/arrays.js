console.log("Hello, arrays!")

const myArray = [0, 1, 2, 3, 4, 5];
const myHeroes = ["Batman", "Superman", "Spiderman", "Ironman", "Thor"];

const myArray2 = new Array(0, 1, 2, 3, 4, 5, "Arka");
// console.log(myArray[0]);

// Array methods
// myArray.push(6);
// myArray.push(7);
// myArray.pop();

// myArray.unshift(9); // adds an element to the beginning of the array
// myArray.shift(); // removes the first element

// console.log(myArray.includes(3)); // returns true if the element is present in the array
// console.log(myArray.indexOf(3)); // returns the index of the element

// const newArray = myArray.join(); // converts the array to a string

// console.log(myArray);
// console.log(newArray);
// console.log(typeof(newArray));

// slice, splice
console.log("A", myArray);

const myNewArray1 = myArray.slice(1, 3); // returns a new array
console.log(myNewArray1);
console.log("B ", myArray);

const myNewArray2 = myArray.splice(1, 3); // modifies the original array
console.log("C ", myArray);
console.log(myNewArray2);