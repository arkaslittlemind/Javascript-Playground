class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword() {
        return `${this.password}123`;
    }

    setUserName(username) {
        return `${this.username.toUpperCase()}`;
    }
}

const arka = new User("Arka", "arka@gmail.com", "arka");

// console.log(arka);
console.log(arka.encryptPassword());
console.log(arka.setUserName());

