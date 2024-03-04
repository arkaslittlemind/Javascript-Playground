let score = "33abc"
let score1 = null
let score2 = undefined
let score3 = true

console.log(typeof(score));
console.log(typeof(score));

let valueInNumber = Number(score);

// console.log(typeof(valueInNumber));

console.log(valueInNumber); // NaN => Not a Number

let valueInScore1 = Number(score1);
console.log(valueInScore1); // 0

let valueInScore2 = Number(score2);
console.log(valueInScore2); // NaN

let valueInScore3 = Number(score3);
console.log(valueInScore3); // 1

// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// true => 1
// false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

let name = ""
let booleanName = Boolean(name);
console.log(booleanName);

let name1 = "John"
let booleanName1 = Boolean(name1);
console.log(booleanName1);

//1 => true; 0 => false
// "" => false; " " => true; "John" => true


let number = 33
let stringNumber = String(number);
console.log(stringNumber);
console.log(typeof stringNumber);