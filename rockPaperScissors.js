let computerScore = 0;
let humanScore = 0;

// Helper functions
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber == 1) {
        return "rock";
    } else if(randomNumber == 2) {
        return "paper";
    } else {
        return "scissor";
    }
}

function getHumanChoice() {
    let userInput = prompt("Choose rock, paper, or scissor");

    return userInput;
}

function playRound(computerChoice, humanChoice) {
    computerChoice = computerChoice.toLowerCase();
    humanChoice = humanChoice.toLowerCase();

    if(computerChoice == "rock") {
        if(humanChoice == "rock") {
            console.log("Tie");
        } else if(humanChoice == "paper") {
            console.log("Human wins");
            ++humanScore;
        } else if(humanChoice == "scissor") {
            console.log("Computer wins");
            ++computerScore;
        }
    } else if((computerChoice == "paper")) {
        if(humanChoice == "rock") {
            console.log("Computer wins");
            ++computerScore;
        } else if(humanChoice == "paper") {
            console.log("Tie");
        } else if(humanChoice == "scissor") {
            console.log("Human wins");
            ++humanScore;
        }
    } else if((computerChoice == "scissor")) {
        if(humanChoice == "rock") {
            console.log("Human wins");
            ++humanScore;
        } else if(humanChoice == "paper") {
            console.log("Computer wins");
            ++computerScore;
        } else if(humanChoice == "scissor") {
            console.log("Tie");
        }
    }
}

// Main game loop WIP
computer = getComputerChoice();
human = getHumanChoice()
playRound(x, y);