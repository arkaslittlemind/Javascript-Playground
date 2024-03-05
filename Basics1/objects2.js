// Object creation => Single object creation

// const tinderUser = {} => non singleton object creation

// const tinderUser = new Object(); // Singleton Object using constructor

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Arka";
tinderUser.age = 23;
tinderUser.location = "Vellore";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "arka@gmail.com",
  fullName: {
    firstName: "Arkadipta",
    lastName: "Mojumder",
  },
};

// console.log(regularUser.fullName.firstName);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

const obj3 = {...obj1, ...obj2};
// console.log(obj3);

const users = [
    {
        id: 1,
        name: "Arka",
        age: 23,
    },
    {
        id: 2,
        name: "Shristi",
        age: 23,
    },
    {
        id: 3,
        name: "Anik",
        age: 24,
    },
    {
        id: 4,
        name: "Aritra",
        age: 24,
    }
];

// users.map((user) => {
//     console.log(user.name);
// });


users[1].email
// console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("state"));
console.log(tinderUser.hasOwnProperty("id"));