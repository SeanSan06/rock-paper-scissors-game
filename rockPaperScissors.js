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

function checkWinner() {
    console.log(humanScore);
    if(computerScore >= 5) {
        const paragraph = document.createElement("p");
        paragraph.textContent = "Computer WINS";
        divContainer.appendChild(paragraph);
        disableAllButtons()
    }
    if(humanScore >= 5) {
        const paragraph = document.createElement("p");
        paragraph.textContent = "Human WINS";
        divContainer.appendChild(paragraph);
        disableAllButtons();
    }
}

function disableAllButtons() {
    const allButtons = document.querySelectorAll("button");

    allButtons.forEach(button => {
        button.disabled = true;
    });
}

function playRound(computerChoice, humanChoice) {
    computerChoice = computerChoice.toLowerCase();
    humanChoice = humanChoice.toLowerCase();

    if(computerChoice == "rock") {
        if(humanChoice == "rock") {
            console.log("Tie this round");
            
        } else if(humanChoice == "paper") {
            console.log("Human wins this round");

            ++humanScore;
        } else if(humanChoice == "scissor") {
            console.log("Computer wins this round");

            ++computerScore;
        }

    } else if((computerChoice == "paper")) {
        if(humanChoice == "rock") {
            console.log("Computer wins this round");
            
            ++computerScore;
        } else if(humanChoice == "paper") {
            console.log("Tie this round");
                        
        } else if(humanChoice == "scissor") {
            console.log("Human wins this round");

            ++humanScore;
        }

    } else if((computerChoice == "scissor")) {
        if(humanChoice == "rock") {
            console.log("Human wins this round");

            ++humanScore;
        } else if(humanChoice == "paper") {
            console.log("Computer wins this round");
            
            ++computerScore;
        } else if(humanChoice == "scissor") {
            console.log("Tie this round");
                        
        }
    }

    checkWinner();
}


// DOM minipulation
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const divContainer = document.querySelector("div");
rockButton.addEventListener("click", function() {
    const paragraph = document.createElement("p");
    paragraph.textContent = "ROCK";
    divContainer.appendChild(paragraph);

    playRound(getComputerChoice(), "rock");
});

paperButton.addEventListener("click", function() {
    const paragraph = document.createElement("p");
    paragraph.textContent = "PAPER";
    divContainer.appendChild(paragraph);

    playRound(getComputerChoice(), "rock");
});

scissorsButton.addEventListener("click", function() {
    const paragraph = document.createElement("p");
    paragraph.textContent = "SCISSORS";
    divContainer.appendChild(paragraph);

    playRound(getComputerChoice(), "rock");
});