let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let random_number = Math.floor(Math.random()*3);
    let decision = choices[random_number];
    return decision;
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

function getPlayerChoice() {
    
}




