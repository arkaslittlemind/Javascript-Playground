class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() {
        return `123`;
    }
}

const arka = new User("Arka");
// console.log(arka.createId());


class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const anik = new Teacher("Anik", "anik@mail.com");
anik.logMe();
// console.log(anik.createId()); // will return error