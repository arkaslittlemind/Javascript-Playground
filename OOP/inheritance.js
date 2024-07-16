class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`${this.username} added a course`);
    }
}

const arka = new Teacher("Arka", "arka@gmail.com", "arka123");

arka.logMe();
arka.addCourse();

const anik = new User("Anik");

anik.logMe(); 

console.log(arka instanceof Teacher);
console.log(anik instanceof User);