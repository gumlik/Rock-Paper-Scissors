// const weapons = ["rock", "paper", "scissors"];
// const buttons = document.querySelectorAll(".btns");
// const rock = document.getElementById("rock");
// const paper = document.getElementById("paper");
// const scissors = document.getElementById("scissors");

// let playerScore = document.querySelector(".player-score");
// let compScore = document.querySelector(".comp-score");

// playerScore = 1;
// compScore = 2;
// const choose = document.querySelector('.choose');

// let getComputerChoice = weapons[Math.trunc(Math.random() * weapons.length)];

// const pressButton = function () {
//   rock.addEventListener("click", () => "rock");
//   paper.addEventListener("click", () => "paper");
//   scissors.addEventListener("click", () => "scissors");
// };

// buttons.forEach((element) => element.addEventListener("click", playRound()));

// function playRound() {
//   let userChoice = pressButton();
//   let getComputerChoice = weapons[Math.trunc(Math.random() * weapons.length)];

//   if (getComputerChoice === userChoice) {
//   } else if (getComputerChoice === "rock" && userChoice === "paper") {
//     playerScore++;
//     document.querySelector(".choose").textContent =
//       "You won that round! The computer chose ROCK";
//   } else if (getComputerChoice === "rock" && userChoice === "scissors") {
//     compScore++;
//     document.querySelector(".choose").textContent =
//       "You won lost that round :( The computer chose ROCK";
//   } else if (getComputerChoice === "paper" && userChoice === "rock") {
//     compScore++;
//     document.querySelector(".choose").textContent =
//       "You lost that round :( The computer chose PAPER";
//   } else if (getComputerChoice === "paper" && userChoice === "scissors") {
//     playerScore++;
//     document.querySelector(".choose").textContent =
//       "You won that round! The computer chose PAPER";
//   } else if (getComputerChoice === "scissors" && userChoice === "rock") {
//     playerScore++;
//     document.querySelector(".choose").textContent =
//       "You won that round! The computer chose SCISSORS";
//   } else if (getComputerChoice === "scissors" && userChoice === "paper") {
//     compScore++;
//     document.querySelector(".choose").textContent =
//       "You lost that round :( The computer chose SCISSORS";
//   }
//   console.log(getComputerChoice);
// }

// playRound();
// function playFiveRounds() {
//   for (let i = 0; i < 5; i++) {
//     console.log(playRound());
//   }
//   playerScore > compScore
//     ? alert("Player wins this match!")
//     : alert("Ai wins this match!");
// }

// playFiveRounds();

// console.log(playerScore);
// console.log(compScore);

// playerScore.textContent = 0;
// compScore.textContent = 0;
// playerScore = 0;
// compScore = 0;

// Player Choice Button Press
// rockBtn.addEventListener("click", function () {
//   playRound();
//   playerChoice = "rock";
//   console.log(playerChoice);
// });

// paperBtn.addEventListener("click", function () {
//   playRound();
//   playerChoice = "paper";
//   console.log(playerChoice);
// });

// scissorsBtn.addEventListener("click", function () {
//   playRound();
//   playerChoice = "scissors";
//   console.log(playerChoice);
// });

// const playerScoreDisplay = document.querySelector(".player-score");
// const compScoreDisplay = document.querySelector(".comp-score");
// const choose = document.querySelector(".choose");

const playerScoreDisplay = document.querySelector(".player-score");
const compScoreDisplay = document.querySelector(".comp-score");
const resultDisplay = document.querySelector(".choose");
let choose = document.querySelector(".choose");
const weapons = ["rock", "paper", "scissors"];

let playerScore = 0;
let compScore = 0;

playerScoreDisplay.textContent = 0;
compScoreDisplay.textContent = 0;

const buttons = document.getElementsByTagName("input");
for (const button of buttons) {
  button.addEventListener("click", takeTurn);
}

function takeTurn(e) {
  playerChoice = e.target.id;
  playRound();
  console.log(playerChoice);
}
function playRound() {
  let computerChoice = weapons[Math.trunc(Math.random() * weapons.length)];

  if (computerChoice === playerChoice) {
    resultDisplay.textContent = "Tie!";
  } else if (
    (computerChoice === "rock" && playerChoice === "paper") ||
    (computerChoice === "paper" && playerChoice === "scissors") ||
    (computerChoice === "scissors" && playerChoice === "rock")
  ) {
    playerScore++;
    resultDisplay.textContent = `You won that round! The computer chose ${computerChoice}`;
    playerScoreDisplay.textContent = playerScore;
  } else if (
    (computerChoice === "rock" && playerChoice === "scissors") ||
    (computerChoice === "paper" && playerChoice === "rock") ||
    (computerChoice === "scissors" && playerChoice === "paper")
  ) {
    compScore++;
    resultDisplay.textContent = `You lost that round :( The computer chose ${computerChoice}`;
    compScoreDisplay.textContent = compScore;
  }
}

//////////////////////////////////////////////////////////
// const playerScoreDisplay = document.querySelector('.player-score'); // changed name
// const compScoreDisplay = document.querySelector('.comp-score'); // changed name
// let resultDisplay = document.querySelector('.choose'); // changed name
// const rockBtn = document.getElementById('rock'); // delete this, you do not need
// const paperBtn = document.getElementById('paper'); // delete this, you do not need
// const scissorsBtn = document.getElementById('scissors'); // delete this, you do not need
// const weapons = ['rock', 'paper', 'scissors'];
// let playerScore = 0; // added this
// let compScore = 0; // added this

// // set initial score display to 0, could also do in HTML
// playerScoreDisplay.textContent = 0;
// compScoreDisplay.textContent = 0;

// const buttons = document.getElementsByTagName('input');
// for (const button of buttons) {
// button.addEventListener('click', takeTurn);
// }

// function takeTurn(e) {
// playerChoice = e.target.id;
// playRound();
// }
// function playRound() {
// let computerChoice = weapons[Math.trunc(Math.random() * 3)]; // changed to 3 hardcode

// if (computerChoice === playerChoice) {
// resultDisplay.textContent = 'Tie!';
// } else if (
// (computerChoice === 'rock' && playerChoice === 'paper') ||
// (computerChoice === 'paper' && playerChoice === 'scissors') ||
// (computerChoice === 'scissors' && playerChoice === 'rock')
// ) {
// playerScore++;
// resultDisplay.textContent = `You won that round! The computer chose ${computerChoice}`;
// playerScoreDisplay.textContent = playerScore;
// } else if (
// (computerChoice === 'rock' && playerChoice === 'scissors') ||
// (computerChoice === 'paper' && playerChoice === 'rock') ||
// (computerChoice === 'scissors' && playerChoice === 'paper')
// ) {
// compScore++;
// resultDisplay.textContent = `You lost that round :( The computer chose ${computerChoice}`;
// compScoreDisplay.textContent = compScore;
// }
// }
