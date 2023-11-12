function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let random_number = Math.floor(Math.random()*3);
    let decision = choices[random_number];
    return decision;
}




const player_options_buttons = document.querySelector("#player-options-div");

const scorePlayer = document.querySelector("#player-score-text");

const scoreComputer = document.querySelector("#computer-score-text");

const player_choice_html = document.querySelector("#player-choice-text");

const computer_choice_html = document.querySelector("#computer-choice-text");

const result = document.querySelector("#result");

const explantion = document.querySelector("#explantion");

let player_score = 0;

let computer_score = 0;

function roundPlayed(change_back=true) {
    if (change_back === true) {
        player_options_buttons.innerHTML = `<button id="reset-button">Reset</button>`;
    }
    else {
        computer_choice_html.textContent = "";
        player_choice_html.innerHTML = "";
        result.textContent = "";
        explantion.textContent = "";
        player_options_buttons.innerHTML = `
        <button id="rock">
                <img id="rock-img" src="https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296854_1280.png">
            </button>
            <button id="paper">
                <img id="paper-img" src="https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296855_1280.png">
            </button>
        
        
            <button id="scissors">
                <img id="scissors-img" src="https://www.clker.com/cliparts/8/B/i/M/Y/Z/scissors-md.png">
            </button>
        `;
    }
}



player_options_buttons.addEventListener("click", (event) => {
    let target = event.target;
    switch (target.id) {
        case "rock":
        case "rock-img":
            playRound("Rock");
            roundPlayed();
            break;

        case "paper":
        case "paper-img":
            playRound("Paper");
            roundPlayed();
            break;

        case "scissors":
        case "scissors-img":
            playRound("Scissors");
            roundPlayed();
            break;

        case "reset-button":
            roundPlayed(false);
        default:
            break;
    }
    scorePlayer.textContent = player_score;
    scoreComputer.textContent = computer_score;
});



function playRound(player_choice) {
    let computer_choice = getComputerChoice();
    player_choice_html.textContent = player_choice;
    computer_choice_html.textContent = computer_choice;
    if (computer_choice === player_choice){
        result.textContent = "Draw!"
        return;

    }
    else if (computer_choice === "Paper" && player_choice === "Rock") {
        result.textContent = "Computer Wins!";
        explantion.textContent = `${computer_choice} covers ${player_choice}`;
        computer_score++;
        return;
        
    }
    else if (computer_choice === "Paper" && player_choice === "Scissors") {
        result.textContent = "You Win!";
        explantion.textContent = `${player_choice} cuts ${computer_choice}`;
        player_score++;
        return;
    }

    else if (computer_choice === "Rock" && player_choice === "Paper")  {
        result.textContent = "You Win!";
        explantion.textContent = `${player_choice} covers ${computer_choice}`;
        player_score++;
        return;
    }

    else if (computer_choice === "Rock" && player_choice === "Scissors") {
        result.textContent = "Computer Wins!";
        explantion.textContent = `${computer_choice} crushes ${player_choice}`;
        computer_score++;
        return;
    }

    else if (computer_choice === "Scissors" && player_choice === "Rock") {
        result.textContent = "You Win!";
        explantion.textContent = `${player_choice} crushes ${computer_choice}`;
        player_score++;
        return;
    }
    else {
        result.textContent = "Computer Wins!";
        explantion.textContent = `${computer_choice} cuts ${player_choice}`;
        computer_score++;
        return;
    }
}




