// let a = 10;
// const b = 20;
// var c = 30;

// var c = 300;

let a = 300;

if (true) {
  let a = 10;
  const b = 20;
//   console.log("Inside if block: ", a);
}



// console.log(a);
// console.log(b);
// console.log(c);

// ----------------------------------------- //
// Scope through node is different than browser

// Scope of let and const is block level
// Scope of var is function level or global level

// let and const are not hoisted
// var is hoisted
// ----------------------------------------- //


function one() {
    const username = "arka";

    function two() {
        const website = "github.com"
        console.log(username);
    }
    // console.log(website);

    two();
}

// one();

if(true) {
    const username = "arka";
    if(username === "arka") {
       const website = "github.com";
    //    console.log(username + "@" + website);
    }
    // console.log(website);
}

// console.log(username);


// ---------- Interesting ---------- //

console.log(addOne(5));  //


function addOne(num) {
    return num + 1;
}

addTwo(5); // Error => Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2;
}

