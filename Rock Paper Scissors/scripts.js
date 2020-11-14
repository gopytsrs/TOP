const results = document.querySelector("#results");
const rock = document.querySelector("#rock");
rock.addEventListener("click", () => playRound("rock", computerPlay()));

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => playRound("paper", computerPlay()));

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => playRound("scissors", computerPlay()));
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");

//Variable to check if player won
let playerWins;
//Variable to store player and computer wins
let playerWinCount = 0;
let computerWinCount = 0;
//Function to select a choice for the computer!
function computerPlay() {
  let choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
}
//Function to play a round
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    countWins(-1);
    results.textContent = `You Lose! ${capitalize(
      computerSelection
    )} beats ${capitalize(playerSelection)}`;
  } else if (playerSelection == computerSelection) {
    results.textContent = `Draw! Both picked ${capitalize(playerSelection)}`;
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    countWins(1);
    results.textContent = `You Win! ${capitalize(
      playerSelection
    )} beats ${capitalize(computerSelection)}`;
  } else {
    results.textContent = `Error! ${capitalize(
      playerSelection
    )} is not a valid choice!`;
  }
  if (playerWinCount == 5 || computerWinCount == 5) {
    results.textContent = whoWon();
    playerScore.textContent = "Player: 0";
    computerScore.textContent = "Computer: 0";
    playerWinCount = 0;
    computerWinCount = 0;
  }
}

//Function to capitalise the choice
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
}
//Function to count player wins
function countWins(playerWins) {
  if (playerWins == 1) {
    playerWinCount++;
    playerScore.textContent = `Player: ${playerWinCount}`;
  } else if (playerWins == -1) {
    computerWinCount++;
    computerScore.textContent = `Computer: ${computerWinCount}`;
  }
}
//Function to determine winner//
function whoWon() {
  if (playerWinCount > computerWinCount) {
    return `Player wins! Player: ${playerWinCount}, Computer: ${computerWinCount}`;
  } else {
    return `Player loses! Player: ${playerWinCount}, Computer: ${computerWinCount}`;
  }
}
