const user = {
    name: 'Arka',
    age: 23,
    status: 'Unemployed',

    // Method
    getUserDetails: function() {
        // console.log("User details fetched from database!");
        // console.log(`Username: ${this.name}, Age: ${this.age}, Status: ${this.status}`);
        console.log(this);
    }
}


// console.log(user.name);
// console.log(user.getUserDetails());

function User(userName, loginCount, isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = () => {
        console.log(`Hello, ${this.userName}`);
    }

    console.log(this.greeting());
    
    return this;
}

const userOne = new User("Arka", 5, true);
const userTwo = new User("Anik", 6, false);

console.log(userOne.constructor);
// console.log(userTwo);

// 1st Whenever we use 'new' keyword, it creates a new object and binds 'this' keyword to that object.
// 2nd A constructor function is called because of the 'new' keyword.
// 3rd All the arguments you have written is injected in the 'this' keyword.
// 4th 'this' keyword is returned by default.