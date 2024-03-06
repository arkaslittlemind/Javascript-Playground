// Functions Basics 1

function sayMyName() {
    console.log("A");
    console.log("R");
    console.log("K");
    console.log("A");
}

// for(let i = 0; i < 3; i++) {
//     sayMyName();
//     console.log("----");
// }

// sayMyName();

// function add2Numbers(n1, n2) { // function definition
//     console.log(n1 + n2);      // n1 and n2 are parameters
// }

function add2Numbers(n1, n2) { // function definition
    //console.log(n1 + n2);   // n1 and n2 are parameters
    // let result = n1 + n2;
    // return result;
    return n1 + n2;      
}

const result = add2Numbers(10, 20); // function call with arguments

// console.log("Result: ", result);

function loginUserMessage(username = "arka") {
    if(!username) {
        console.log("Please provide a username.");
        return;
    }
    return `${username} has logged in.`;
}

// console.log(loginUserMessage("Arka"));
// console.log(loginUserMessage("Shristi"));

function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

// console.log(calculateCartPrice(10, 20, 30));

const user = {
    username: "arka",
    price: 200 
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price: ${anyObject.price}`);
}

// handleObject(user);
handleObject({
    username: "shristi",
    price: 300
})

const myNewArray = [200, 400, 100, 600]

function return2ndValue(getArray) {
    return getArray[1];
}

console.log(return2ndValue(myNewArray));