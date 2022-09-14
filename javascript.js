// create a function that chooses for the computer
// allow for user input (non-case sensitive)
// if computer choice is rock
    // for use choice of rock - tie
    // for user choice of paper - win
    // for user choice of scissors - lose
// if computer choice is paper
    // for use choice of rock - lose
    // for user choice of paper - tie
    // for user choice of scissors - win
// if computer choice is scissors
    // for use choice of rock - win
    // for user choice of paper - lose
    // for user choice of scissors - win
// create a loop that allows you to play best out of 5
// declare a winner
// return who is winner

//list of choices the computer can choose from
let choices = Array("rock", "paper", "scissors");

//chooses for the computer at the beginning of the bout
let getComputerChoice = choices[Math.floor(Math.random()*choices.length)];
console.log(getComputerChoice); //debugger

//allows for user input of choice
let playerSelection = prompt("What is your choice?");
playerSelection = playerSelection.toLowerCase();
console.log(playerSelection)

//logic tree for player selection versus computer selection
function judge (player, computer) {
    if (player === "rock") {
        if (computer === "rock") {
            return "It's a tie!";
        } else if (computer === "paper") {
            return "Paper beats Rock, you lose :(";
        } else {
            return "Rock beats Scissors, you win!!";
        }
    } else if (player === "paper") {
        if (computer === "rock") {
            return "Paper beats Rock, you win!!";
        } else if (computer === "paper") {
            return "It's a tie!";
        } else {
            return "Scissors beats Paper, you lose :(";
        }
    } else if (player === "scissors") {
        if (computer === "rock") {
            return "Rock beats Scissors, you lose :(";
        } else if (computer === "paper") {
            return "Scissors beats Paper, you win!!";
        } else {
            return "It's a tie!";
        }
    } else {
        return "Hey! No cheating!";
    }
}

console.log(judge(playerSelection, getComputerChoice))
