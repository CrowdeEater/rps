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
    (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'ROCK')){

        computerScore++;
        document.getElementById('result').textContent = "You Lose!";
    } else {
        playerScore++;
        document.getElementById('result'),textContent = "You Won!";
    }
}


function checkWinner() {
    if(rounds === 5) {
        if(computerScore === playerScore) {
            document.getElementById('result').textContent = "You\'ve ended in a draw!";
        }
        else if (playerScore > computerScore) {
            document.getElementById('result').textContent = "You\'ve won the game!";
        }
        else {
            document.getElementById('result').textContent = "You\'ve lost the game :(";
        }
        return true;
    }
    return false;
}

function updateScore(playerSelection, computerSelection) {
    document.getElementById('pSelection').textContent = playerSelection;
    document.getElementById('cSelection').textContent = computerSelection;
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
}

function game() {
    const options = document.querySelectorAll('.btn');
    options.forEach(option => option.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        const playerSelection = option.id;

        document.getElementById('result').textContent = '';

        playRound(playerSelection, computerSelection);
        updateScore(playerSelection, computerSelection);
        rounds++;
        if(checkWinner()) {
            rounds = computerScore = playerScore = 0;
            updateScore(playerSelection, computerSelection);
        };
    }));
}
game();