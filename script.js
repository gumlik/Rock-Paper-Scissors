const playerScoreDisplay = document.querySelector(".player-score");
const compScoreDisplay = document.querySelector(".comp-score");
const resultDisplay = document.querySelector(".choose");
const gameBackground = document.querySelector(".game-container");
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
}

const removeListener = function () {
  const buttons = document.getElementsByTagName("input");
  for (const button of buttons) {
    button.removeEventListener("click", takeTurn);
  }
};

const winGame = function () {
  if (playerScore === 3) {
    resultDisplay.textContent = "YOU WIN IT ALL!";
    removeListener();
  } else if (compScore === 3) {
    resultDisplay.textContent = "You lose the game :(";
    removeListener();
  }
};

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
    resultDisplay.textContent = `WIN! Computer chose ${computerChoice}`;
    playerScoreDisplay.textContent = playerScore;
  } else if (
    (computerChoice === "rock" && playerChoice === "scissors") ||
    (computerChoice === "paper" && playerChoice === "rock") ||
    (computerChoice === "scissors" && playerChoice === "paper")
  ) {
    compScore++;
    resultDisplay.textContent = `LOSE - Computer chose ${computerChoice}`;
    compScoreDisplay.textContent = compScore;
  }
  winGame();
}
