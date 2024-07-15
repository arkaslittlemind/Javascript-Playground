let myHeroes = ["Thor", "Spiderman"]

let powerHeroes = {
    Thor: "God of Thunder",
    Spiderman: "Spider Sense",

    getSpiderPower: function() {
        console.log(`Spiderman has ${this.Spiderman}`);
    }
}

Object.prototype.arka = function() {
    console.log(`Arka is present in all objects`);
}

Array.prototype.heyArka = function() {
    console.log(`Hey Arka is present in all arrays`);
}

// powerHeroes.arka();

// myHeroes.arka();
// myHeroes.heyArka();
// powerHeroes.heyArka();


// Inheritance

const user = {
    name: "Arka",
    email: "arka@gmail.com"

}

const teacher = {
    makeVideos: true
}

const teachingSupport = {
    isAvailable: false
}

const taSupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: teacher
}

teacher.__proto__ = user;

// Modern Syntax
Object.setPrototypeOf(teachingSupport, teacher); //prototypal inheritance


// Task 1
let anotherUsername = "arkaslittlemind      ";

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True Length is ${this.trim().length}`);
}

anotherUsername.trueLength();
"Arka".trueLength();