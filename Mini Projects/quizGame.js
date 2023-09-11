const prompt = require('prompt-sync')();

console.log('Welcome to the Quiz Game!');

const answer1 = prompt('What is the brain of the computer?');
const correctAnswer1 = 'CPU';

if(answer1 === correctAnswer1) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}







