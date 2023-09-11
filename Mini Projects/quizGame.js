const prompt = require('prompt-sync')({sigint: true});

const value = prompt('Enter something: ');
console.log('You entered: ' + value);

