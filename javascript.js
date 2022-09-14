let playerScore = 0;
let computerScore = 0;
let tie = 0;


// counter for the five rounds
for(var i = 0; i < 5; ++i) {

  let choices = Array("rock", "paper", "scissors");

  //chooses for the computer at the beginning of the bout
  let getComputerChoice = choices[Math.floor(Math.random()*choices.length)];
  console.log(getComputerChoice); //debugger

  //allows for user input of choice
  let playerSelection = prompt("What is your choice?");
  playerSelection = playerSelection.toLowerCase();
  //console.log(playerSelection)

  //logic tree for player selection versus computer selection
  function playRound (player, computer) {
    if (player === "rock") {
        if (computer === "rock") {
            //return "It's a tie! Go again!";
            return "t";
        } else if (computer === "paper") {
            //return "Paper beats Rock, you lose :(";
            return -1;
        } else {
            //return "Rock beats Scissors, you win!!";
            return 1;
        }
    } else if (player === "paper") {
        if (computer === "rock") {
            //return "Paper beats Rock, you win!!";
            return 1;
        } else if (computer === "paper") {
            //return "It's a tie! Go Again!";
            return "t";
        } else {
            //return "Scissors beats Paper, you lose :(";
            return -1;
        }
    } else if (player === "scissors") {
        if (computer === "rock") {
           // return "Rock beats Scissors, you lose :(";
           return -1;
        } else if (computer === "paper") {
            //return "Scissors beats Paper, you win!!";
            return 1;
        } else {
           // return "It's a tie!";
           return "t";
        }
    } else {
        return "Hey! No cheating!";
    }
  }

  let result = playRound(playerSelection, getComputerChoice);

  if (result === 1) {
    ++playerScore
    console.log("Yay! You got a point!")
  } else if (result === -1) {
    ++computerScore
    console.log("Darn, lost that bout!")
  } else if (result === "t") {
    ++tie
    console.log("Tied! Go again!")
  } else {
    console.log("error :(");
  }

  console.log(playerScore)
  console.log(computerScore)
  console.log(tie)

  if(playerScore === 3 || (i === 4 && playerScore > computerScore)) {
    console.log("Hurrah! You won the game!")
    break;
  } else if (computerScore === 3 || (i === 4 && playerScore < computerScore)) {
    console.log("Darn, you lost the game :(")
    break;
  } else if (tie === 3) {
    console.log("It's a tie! Try again next time!")
  } else {
    console.log()
  }
}
