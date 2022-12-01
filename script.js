let weapons = ["rock", "paper", "scissors"];

let getComputerChoice = weapons[Math.trunc(Math.random() * weapons.length)];

function playRound() {
  let userChoice = prompt();
  let getComputerChoice = weapons[Math.trunc(Math.random() * weapons.length)];
  if (getComputerChoice === userChoice) {
    return "tie!";
  } else if (getComputerChoice === "rock" && userChoice === "paper") {
    return "You win!";
  } else if (getComputerChoice === "rock" && userChoice === "scissors") {
    return "You lose :(";
  } else if (getComputerChoice === "paper" && userChoice === "rock") {
    return "You lose!";
  } else if (getComputerChoice === "paper" && userChoice === "scissors") {
    return "You win! :)";
  } else if (getComputerChoice === "scissors" && userChoice === "rock") {
    return "You win! :)";
  } else if (getComputerChoice === "scissors" && userChoice === "paper") {
    return "You lose :(";
  }
}

function playFiveRounds() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound());
  }
}

playFiveRounds();
