// Singleton object

// object literals

const mySymbol = Symbol("key1");


const JsUser = {
    name: "Arka",
    "fullName": "Arkadipta Mojumder",
    [mySymbol]: "key1",
    age: 23,
    location: "Vellore",
    email: "arka@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["fullName"]);
// console.log(JsUser[mySymbol]);

JsUser.email = "arka@yahoo.com";
// console.log(JsUser.email);

// Object.freeze(JsUser);
JsUser.email = "arka@nexon.com";
// console.log(JsUser.email);

//console.table(JsUser);

// JsUser.greeting = function () {
//     console.log("Hello JS User!");
// }

JsUser.greeting2 = function () {
    console.log(`Hello ${this.fullName}`);
}

console.log(JsUser.greeting2());