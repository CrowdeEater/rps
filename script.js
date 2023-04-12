let playerScore = 0;
let computerScore = 0;
let rounds = 0;

//get random choice for Computer.
function getComputerChoice() {
        let choice = ['rock', 'paper', 'scissors'];
        const randomChoice = choice[Math.floor(Math.random() * choice.length)];
        return randomChoice;
}

//play one round of the game
function playRound(playerSelection, computerSelection) {
    if(playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        document.getElementById('result').textContent = "It's a draw!";
    }
    else if((playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'PAPER') ||
    (playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'SCISSORS') ||
    (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'ROCK')) {

        computerScore++;
        document.getElementById('result').textContent = "You Lose!";
    } else {
        playerScore++;
        document.getElementById('result'),textContent = "You Won!";
    }
}

