// Variables
let playerScore = 0;
let computerScore = 0;
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");
const resetButton = document.getElementById("reset");
const choices = document.querySelectorAll(".choice");

// Computer choice function
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

// Determine the winner
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a draw!";
  }

  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    playerScore++;
    return "You win!";
  }

  computerScore++;
  return "Computer wins!";
}

// Update score and display result
function updateGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const resultMessage = determineWinner(playerChoice, computerChoice);

  resultDiv.innerHTML = `<p>Your choice: ${playerChoice}<br>Computer's choice: ${computerChoice}</p><p>${resultMessage}</p>`;

  scoreDiv.innerHTML = `Player: ${playerScore} | Computer: ${computerScore}`;
}

// Reset game
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  scoreDiv.innerHTML = `Player: 0 | Computer: 0`;
  resultDiv.innerHTML = "<p>Make your choice!</p>";
}

// Event listeners for player choices
choices.forEach(choice => {
  choice.addEventListener('click', (e) => {
    const playerChoice = e.target.id.toLowerCase();
    updateGame(playerChoice);
  });
});

// Reset button event listener
resetButton.addEventListener('click', resetGame);
