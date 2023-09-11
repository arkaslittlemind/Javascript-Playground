const prompt = require("prompt-sync")();

const target = 10 + Math.round(Math.random() * 90);

let guesses = 0;

console.log(target);



while (true) {
  const guess = Number(prompt("Guess a number between 1 and 100: "));
  if (guess >= target) {
    console.log("Your guess is too high!");
    guesses++;
  } else if (guess <= target) {
    console.log("Your guess is too low!");
    guesses++;
  } else {
    console.log(`You got it! You took ${guesses} guesses!`);
    break;
  }
}
