const CHOICES = 3

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let result = playRound();
 
    if (result == "Player wins!") {
      playerScore++;
    } else if (result == "Computer wins!") {
      computerScore++;
    } else {
      i--
    }
    console.log(result);
    console.log(playerScore);
    console.log(computerScore);
    if (playerScore == 3) {
      return "You win!"
    } else if (computerScore == 3) {
      return "Game over! You lose!"
    }
  }
}

function computerPlay() {
  let computerNumber = Math.floor(Math.random() * CHOICES)
  if (computerNumber == 0) {
      return "rock";
  } else if (computerNumber == 1) {
      return "paper";
  } else {
      return "scissors";
  }
}

function playRound() {
  let playerSelection = prompt("Enter your choice: ").toLowerCase();
  let computerSelection = computerPlay();
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

gameResult = game();
console.log(gameResult);

