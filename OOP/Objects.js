function multiplyBy5(num) {
    return num*5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5)); // 10
console.log(multiplyBy5.power); // 2
console.log(multiplyBy5.prototype); // empty object
