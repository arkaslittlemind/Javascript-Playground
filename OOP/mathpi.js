// const descriptor =  Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 4;
// console.log(Math.PI); // Can't override Math.PI

const biriyani = {
    name: "Kolkata Biryani",
    price: 200,
    isAvailable: true,

    orderBiriyani: function() {
        console.log("Code Fat Gaya BC!");
    }
}

console.log(biriyani);

console.log(Object.getOwnPropertyDescriptor(biriyani, "name"));

Object.defineProperty(biriyani, "name", {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(biriyani, "name"));

for (let [key, value] of Object.entries(biriyani)) {
    if(typeof value !== "function") {
        console.log(`${key}: ${value}`);
    }
}