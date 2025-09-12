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
            console.log("Tie this round");
            
            return "tie";
        } else if(humanChoice == "paper") {
            console.log("Human wins this round");

            return "human wins";
        } else if(humanChoice == "scissor") {
            console.log("Computer wins this round");

            return "computer wins";
        }

    } else if((computerChoice == "paper")) {
        if(humanChoice == "rock") {
            console.log("Computer wins this round");

            return "computer wins";
        } else if(humanChoice == "paper") {
            console.log("Tie this round");
                        
            return "tie";
        } else if(humanChoice == "scissor") {
            console.log("Human wins this round");

            return "human wins";
        }

    } else if((computerChoice == "scissor")) {
        if(humanChoice == "rock") {
            console.log("Human wins this round");

            return "human wins";
        } else if(humanChoice == "paper") {
            console.log("Computer wins this round");

            return "computer wins";
        } else if(humanChoice == "scissor") {
            console.log("Tie this round");
                        
            return "tie";
        }
    }
}

// Main game loop WIP
function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    for(let round = 1; round <= 5; ++round) {
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice()
        winner = playRound(computerChoice, humanChoice);

        if(winner == "tie") {
            // pass if tied
        } else if(winner == "human wins") {
            ++humanScore;
        } else if(winner == "computer wins") {
            ++computerScore;
        }
    }  

    if(humanScore > computerScore) {
        console.log("Human has won it all!");
    } else if(computerScore > humanScore) {
        console.log("Computer has won it all!");
    } else {
        console.log("Tied, no one won after 5 rounds...");
    }
}

playGame();