const user = {
  username: "arka",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to the website!`); //this refers to the current context
    console.log(this);
  },
};

// user.welcomeMessage(); //arka, welcome to the website!
// user.username = "shristi";
// user.welcomeMessage(); //arka2, welcome to the website!

// console.log(this); // {} //empty object
// Browser has a global object called window

// Arrow functions

// function chai() {
//     let username = "arka";
//     console.log(this.username); //undefined
// }

// chai(); //window object

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai = () => {
    let username = "arka";
    console.log(this); //{} //empty object
};

// chai();

// Explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// };

// Implicit return
// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => ( num1 + num2 );

const addTwo = (num1, num2) => ({username: "arka"})

console.log(addTwo(2, 3)); //5


// Regular functions uses 'this' keyword
// Arrow functions does not have 'this' keyword