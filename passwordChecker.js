let password = "hello kitty";

if(password.length >= 6) {
    if(password.indexOf(' ') === -1) {
        console.log("Valid Password!");
    } else {
        console.log("Password is long enough, but cannot contain spaces.");
    }
}
else {  
    console.log("Password must be longer!");
}


// Truthy and Falsy Values

let mystery = 5;

if(mystery) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}