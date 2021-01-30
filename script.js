'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const backgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const widthStyle = function (width) {
  document.querySelector('.number').style.width = width;
};

const numberSecret = function (secret) {
  document.querySelector('.number').textContent = secret;
};

const scoreText = function (sc) {
  document.querySelector('.score').textContent = sc;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // ----- When there is no input -----
  if (!guess) {
    displayMessage('⛔️ No number!');

    // ----- When player wins -----
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    numberSecret(secretNumber);
    backgroundColor('#60b347');
    widthStyle('30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // ----- When guess is wrong -----
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreText(score);
    } else {
      displayMessage('💥 You lost the game!');
      scoreText('0');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  scoreText(score);
  numberSecret('?');
  document.querySelector('.guess').value = '';
  backgroundColor('#222');
  widthStyle('15rem');
});
