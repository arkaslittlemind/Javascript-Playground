const prompt = require('prompt-sync')({sigint: true});

console.log('Welcome to the Quiz Game!');


let correctAnswers = 0;
const totalQuestions = 3;



const answer1 = prompt('What is the brain of the computer? ');
const correctAnswer1 = 'CPU';

if(answer1.toUpperCase() === correctAnswer1) {
  console.log('Correct!');
  correctAnswers++;
} else {
  console.log('You got it wrong!');
}


const answer2 = prompt('What is better a 3090ti or a 3080? ');
const correctAnswer2 = '3090ti';

if(answer2.toLowerCase() === correctAnswer2) {
  console.log('Correct!');
  correctAnswers++;
} else {
  console.log('You got it wrong!');
}


const answer3 = prompt('What is the recommended amount of RAM in 2023? ');
const correctAnswer3 = '16GB';

if(answer3.toUpperCase() === correctAnswer3) {
  console.log('Correct!');
  correctAnswers++;
} else {
  console.log('You got it wrong!');
}


console.log('You got ' + correctAnswers + ' out of 3 questions correct!');
console.log('Your score is ' + (correctAnswers / totalQuestions) * 100 + '%.');

