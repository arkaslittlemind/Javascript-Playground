let highScore = 1430;
let userScore = 1200;

if (userScore >= highScore) {
    console.log(`Congrats, you have the new high score of ${userScore}`);
    highScore = userScore;
} else {
    console.log(`Good Game. Your score of ${userScore} did not beat the high score of ${highScore}`);
}

