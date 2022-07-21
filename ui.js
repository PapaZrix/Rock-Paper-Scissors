const choices = 3;
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll(".button");
const playScore = document.querySelector(".player-score");
playScore.textContent = playerScore;
const compScore = document.querySelector(".computer-score");
compScore.textContent = computerScore;
const winner = document.querySelector(".winner");
winner.textContent = "";

buttons.forEach((button) => {
    button.addEventListener("click", function(e) {
        const text = e.target.innerHTML;
        playerSelection = text.toLowerCase();

        let result = playRound();
        const round = document.querySelector(".round");
        round.textContent = result;
        if (result == "Player wins!") {
            playerScore++;
        } else if (result == "Computer wins!") {
            computerScore++;
        }
        playScore.textContent = playerScore;
        compScore.textContent = computerScore;

        if (playerScore == 5) {
            winner.textContent = "You win! Congratulations!";
            winner.style.color = "blue";
        } else if (computerScore == 5) {
            winner.textContent = "Game over! You lose!"
            winner.style.color = "red";
        }
    })
})

function playRound() {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerPlay();
  console.log("player: ", playerSelection);
  console.log("computer: ", computerSelection);
  if (playerSelection == computerSelection) {
      return "It's a tie, try again"
  } else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
      return "Player wins!";
  } else {
      return "Computer wins!";
  }
}

function computerPlay() {
    let computerNumber = Math.floor(Math.random() * choices)
    if (computerNumber == 0) {
        return "rock";
    } else if (computerNumber == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
