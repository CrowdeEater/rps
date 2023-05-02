let playerScore = 0;
let computerScore = 0;
let rounds = 0;

//get random choice for Computer.
function getComputerChoice(){
    choice = ['rock', 'paper', 'scissors'];
    const randomChoice = choice[Math.floor(Math.random() * choice.length)];
    return randomChoice;
}


//Basic if/else rules of the game
//Annouce who won an individual round
//add to 'round count'
function playRound(playerSelection, computerSelection) {
    if(playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        document.getElementById('result').textContent = "It\'s a draw!";
    }
    else if((playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'PAPER') ||
    (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'ROCK') ||
    (playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'SCISSORS')) {

        computerScore++
        document.getElementById('result').textContent = "You LOSE this round!";
    } else {
        playerScore++
        document.getElementById('result').textContent = 'You WIN this round!';
    }
}

//check total round count
//when reached, announce overall win/lose/draw
function checkWinner() {
    if(rounds === 10) {
        if(playerScore === computerScore) {
            document.getElementById('result').textContent = "You\'ve ended in a DRAW!";
        }
        else if(playerScore > computerScore) {
            document.getElementById('result').textContent = "You\'ve WON the game!";
        }
        else {
            document.getElementById('result').textContent = "You\'ve LOST the game!";
        }
        return true;
    }
    return false;
}


//update HTML on player/computer choices
//update HTML on score
function updateScore(playerSelection, computerSelection) {
    document.getElementById('pSelection').textContent = playerSelection;
    document.getElementById('cSelection').textContent = computerSelection;
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
}


//add an event listener to player-clickable buttons
//save info from buttons to a variable
//trigger computer random-choice function
//send user and computer choices to functions
//add to round count
//check if round counter limit it met, if so reset game
function game() {
    const options = document.querySelectorAll('.btn');
    options.forEach(option => option.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        const playerSelection = option.id;

        document.getElementById('result').textContent = '';

        playRound(playerSelection, computerSelection);
        updateScore(playerSelection, computerSelection);

        rounds++

        if(checkWinner()) {
            rounds = computerScore = playerScore = 0;
            updateScore(playerSelection, computerSelection);
        };
    }))
}
game();