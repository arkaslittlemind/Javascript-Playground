let userAge = 25;
let validAge = 18;

if (userAge >= validAge) {
    console.log("You are an adult");
} else {
    console.log("You are a child");
}

parseInt('24') 

parseFloat('24.5') 

console.log(parseFloat('i ate 3 apples'))  

// Double equals vs triple equals

// 1. Double equals does type coercion
// 2. Double equals checks for equality of value, but not equality of type
// 3. It coerces(converts) both values to the same type and then compares them.
// 4. This can lead to some unexpected results!

console.log(4 == 4) ; // true
console.log(4 == '4'); // true ie; type coercion (== evaluates to true but in reality it is not true)


// 1. Triple equals does not do type coercion
// 2. Triple equals checks for equality of value AND type
// 3. If the types are different, it returns false
// 4. If the types are the same, it checks the values

console.log(4 === 4); // true
console.log(4 === '4'); // false ie; type coercion (=== evaluates to false because in reality it is false, one is a number and the other is a string)