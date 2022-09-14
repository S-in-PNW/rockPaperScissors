/* 
* NOTE ************************************************************************************************************************
*
*     This code is almost entirely comtained within one big bad for loop (to act as a counter). In retrospect, some 
*   aspects of this code are really just me thinking too hard. I don't know if the array at the beginnin was really
*   a necessary addition, but it works pretty well and I like it there. 
*   
*     The code declares the computer's choice using the Math.random function to select a string from an array. It then 
*   uses the playRound function to compare the computer's string to an input string submitted by the player. Depending
*   on the strings, the function will release an outcome of 1, -1, or "t".
*   
*     A quick if-statement will add one point to the player if the playRound outcome is 1, a point to the computer for -1
*   and a point towards a tie if "t".
*
*     Finally, another if-statement will evaluate the scores and ultimately determine a winner. Logical operators were
*   used to ensure that the player with the majority points would win the game, regardless of reaching a "best three-out-
*   of-five" scenario. Upon a win or loss, the for-loop will be broken and the game ends.
*
********************************************************************************************************************************
*
* TABLE OF CONTENTS 
*
*   SCORING VARIABLES
*
*   FOR-LOOP COUNTER
*
*     - ARRAY
*
*     - COMPUTER CHOICE
*
*     - PLAYER CHOICE
*
*     - PLAYROUND FUNCTION
*
*     - IF-STATEMENT SCORE COUNTER
*
*     - IF-SATEMENT WIN/LOSS DECLARATION
*
*
*/


//scoring variables
let playerScore = 0;
let computerScore = 0;
let tie = 0;


// counter for the five rounds
for(var i = 0; i < 5; ++i) {

  //array of choices the computer can choose from
  let choices = Array("rock", "paper", "scissors");

  //chooses for the computer at the beginning of the bout
  let getComputerChoice = choices[Math.floor(Math.random()*choices.length)];
  
  //console.log(getComputerChoice); //debugger

  //allows for user input of choice
  let playerSelection = prompt("What is your choice?");
  playerSelection = playerSelection.toLowerCase();

  //console.log(playerSelection) //debugger

  //logic tree for player selection versus computer selection
  function playRound (player, computer) {
    if (player === "rock") { //if player chooses rock
        if (computer === "rock") {
            return "t"; // tie
        } else if (computer === "paper") {
            return -1; // loss
        } else {
            return 1; // win
        }
    } else if (player === "paper") { // if player chooses paper
        if (computer === "rock") {
            return 1; // win
        } else if (computer === "paper") {
            return "t"; // tie
        } else {
            return -1; // loss
        }
    } else if (player === "scissors") { //if player chooses scissors
        if (computer === "rock") {
           return -1; // loss
        } else if (computer === "paper") {
            return 1; // win
        } else {
           return "t"; // tie
        }
    } else {
        return "Hey! No cheating!"; // fallthrough
    }
  }

  // puts result of the funstion in a variable
  let result = playRound(playerSelection, getComputerChoice);

  // keeps score based off of the "result" variable
  if (result === 1) {
    ++playerScore // point for the player
    console.log("Yay! You got a point!")
  } else if (result === -1) {
    ++computerScore // point for the computer
    console.log("Darn, lost that bout!")
  } else if (result === "t") {
    ++tie // point towards a tie
    console.log("Tied! Go again!")
  } else {
    console.log(); // fallthrough
  }

  //console.log(playerScore)   // debugger
  //console.log(computerScore) // debugger
  //console.log(tie)           // debugger

  // declares a win, loss, or tie
  if(playerScore === 3 || (i === 4 && playerScore > computerScore)) {
    console.log("Hurrah! You won the game!")
    break;
  } else if (computerScore === 3 || (i === 4 && playerScore < computerScore)) {
    console.log("Darn, you lost the game :(")
    break;
  } else if (tie === 3) {
    console.log("It's a tie! Try again next time!")
  } else {
    console.log() // fallthrough
  }
}
