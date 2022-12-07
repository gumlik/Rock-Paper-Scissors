const weapons = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll(".btns");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let getComputerChoice = weapons[Math.trunc(Math.random() * weapons.length)];
let playerScore = 0;
let compScore = 0;

const pressButton = function () {
  rock.addEventListener("click", (e) => {
    return "rock";
  });
  paper.addEventListener("click", (e) => {
    return "paper";
  });
  scissors.addEventListener("click", (e) => {
    return "scissors";
  });
};

buttons.forEach((element) => element.addEventListener("click", playRound()));

function playRound() {
  let userChoice = prompt();
  let getComputerChoice = weapons[Math.trunc(Math.random() * weapons.length)];

  if (getComputerChoice === userChoice) {
  } else if (getComputerChoice === "rock" && userChoice === "paper") {
    playerScore++;
  } else if (getComputerChoice === "rock" && userChoice === "scissors") {
    compScore++;
  } else if (getComputerChoice === "paper" && userChoice === "rock") {
    compScore++;
  } else if (getComputerChoice === "paper" && userChoice === "scissors") {
    playerScore++;
  } else if (getComputerChoice === "scissors" && userChoice === "rock") {
    playerScore++;
  } else if (getComputerChoice === "scissors" && userChoice === "paper") {
    compScore++;
  }
}

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
