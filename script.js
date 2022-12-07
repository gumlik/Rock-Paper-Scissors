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

let playerScore = document.querySelector(".player-score");
let compScore = document.querySelector(".comp-score");
let choose = document.querySelector(".choose");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const weapons = ["rock", "paper", "scissors"];

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
  let getComputerChoice = weapons[Math.trunc(Math.random() * weapons.length)];

  console.log(getComputerChoice);
  if (getComputerChoice === playerChoice) {
    document.querySelector(".choose").textContent = "Tie!";
  } else if (getComputerChoice === "rock" && playerChoice === "paper") {
    document.querySelector(".choose").textContent =
      "You WON that round! The computer chose ROCK";
    playerScore.innerHTML = Number(playerScore.innerHTML) + 1;
  } else if (getComputerChoice === "rock" && playerChoice === "scissors") {
    compScore.innerHTML = Number(compScore.innerHTML) + 1;
    document.querySelector(".choose").textContent =
      "You LOST that round :( The computer chose ROCK";
  } else if (getComputerChoice === "paper" && playerChoice === "rock") {
    compScore.innerHTML = Number(compScore.innerHTML) + 1;
    document.querySelector(".choose").textContent =
      "You LOST that round :( The computer chose PAPER";
  } else if (getComputerChoice === "paper" && playerChoice === "scissors") {
    playerScore.innerHTML = Number(playerScore.innerHTML) + 1;
    document.querySelector(".choose").textContent =
      "You WON that round! The computer chose PAPER";
  } else if (getComputerChoice === "scissors" && playerChoice === "rock") {
    playerScore.innerHTML = Number(playerScore.innerHTML) + 1;
    document.querySelector(".choose").textContent =
      "You WON that round! The computer chose SCISSORS";
  } else if (getComputerChoice === "scissors" && playerChoice === "paper") {
    compScore.innerHTML = Number(compScore.innerHTML) + 1;
    document.querySelector(".choose").textContent =
      "You LOST that round :( The computer chose SCISSORS";
  }
}
