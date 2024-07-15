function setUserName(username) {
    // Complex DB Calls
    this.username = username;
    // console.log("Called");
}

function createUser(username, email, password) {
    setUserName.call(this, username);
    this.email = email;
    this.password = password;
}

const arka = new createUser("Arka", "arka@gmail.com", "arka123");
console.log(arka);