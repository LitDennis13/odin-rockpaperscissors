let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let random_number = Math.floor(Math.random()*3);
    let decision = choices[random_number];
    return decision;
}

function checkIfInArray(value_to_check,array) {
    for (let i = 0; i < array.length; i++) {
        if (value_to_check == array[i]) {
            return true;
        }
    }
    return false;

}

function getPlayerChoice() {
    let got_player_choice = false;
    let player_choice = "";

    while (!got_player_choice) {
        player_choice = prompt("Rock, Paper, or Scissors?").toLowerCase();
        if (checkIfInArray(player_choice,choices)) {
            return player_choice;
        }
        else {
            alert("Please pick Rock, Paper, or Scissors")
        }
    }
}

function playRound(computer_choice, player_choice) {
    if (computer_choice === player_choice){
        return `Draw: ${computer_choice} is the same as ${player_choice}`;
    }
    else if (computer_choice === "paper" && player_choice === "rock") {
        return "Computer wins: Paper covers Rock";
    }
    else if (computer_choice === "paper" && player_choice === "scissors") {
        return "You win: Scissors cuts Paper";
    }

    else if (computer_choice === "rock" && player_choice === "paper")  {
        return "You win: Paper covers Rock";
    }

    else if (computer_choice === "rock" && player_choice === "scissors") {
        return "Computer wins: Rock crushes Scissors";
    }

    else if (computer_choice === "scissors" && player_choice === "rock") {
        return "You win: Rock crushes Scissors";
    }
    else {
        return "Computer wins: Scissors cuts Paper";
    }
}

let rounds = 5;
let rounds_played = 0;
let player_choice;
let computer_choice;
let round_result;
while (rounds_played < rounds) {
    player_choice = getPlayerChoice();
    computer_choice = getComputerChoice();
    round_result = playRound(computer_choice, player_choice);
    rounds_played++;
    alert(`You chose: ${player_choice}\nComputer chose: ${computer_choice}\n\n${round_result}\nRound Number: ${rounds_played}`);
    
}

