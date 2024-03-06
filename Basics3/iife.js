// Immediately Invoked Function Expression (IIFE)

(function chai() {
    // Named IIFE
    console.log(`DB CONNECTED`);
})();

// IIFE is a function that is executed right after it is created
// Global scope variables or any pollution can be avoided using IIFE

// IIFE using arrow function
((name) => {
    // Unnamed IIFE
    console.log(`DB CONNECTED 2 ${name}`);
})(`arka`);

