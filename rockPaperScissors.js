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
        divContainer.textContent = "";
        
        const paragraph = document.createElement("p");
        paragraph.textContent = "Computer won! :(";
        paragraph.style.fontSize = "36px";
        divContainer.appendChild(paragraph);
        disableAllButtons()
    }
    if(humanScore >= 5) {
        divContainer.textContent = "";

        const paragraph = document.createElement("p");
        paragraph.textContent = "You won!!! :)";
        paragraph.style.fontSize = "36px";
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

    const paragraphWinner = document.createElement("p");

    // Add a background to these moves
    winnerHuman.style.backgroundColor = "lightskyblue";
    winnerHuman.style.height = "80px";
    winnerHuman.style.lineHeight = "80px";
    winnerHuman.style.padding = "8px";

    winnerComputer.style.backgroundColor = "lightskyblue";
    winnerComputer.style.height = "80px";
    winnerComputer.style.lineHeight = "80px";
    winnerComputer.style.padding = "8px";
    
    if(computerChoice == "rock") {
        if(humanChoice == "rock") {
            winnerHuman.textContent = "TIED";
            winnerComputer.textContent = "TIED";

            scoreArea.insertBefore(winnerHuman, scoreChild);
            scoreArea.append(winnerComputer);
        } else if(humanChoice == "paper") {
            winnerComputer.style.padding = "0px";

            winnerHuman.textContent = "You win";

            scoreArea.insertBefore(winnerHuman, scoreChild);

            ++humanScore;
        } else if(humanChoice == "scissor") {
            winnerHuman.style.padding = "0px";

            winnerComputer.textContent = "Computer wins";

            scoreArea.append(winnerComputer);

            ++computerScore;
        }

    } else if((computerChoice == "paper")) {
        if(humanChoice == "rock") {
            winnerHuman.style.padding = "0px";
            
            winnerComputer.textContent = "Computer wins";

            scoreArea.append(winnerComputer);

            ++computerScore;
        } else if(humanChoice == "paper") {
            winnerHuman.textContent = "TIED";
            winnerComputer.textContent = "TIED";

            scoreArea.insertBefore(winnerHuman, scoreChild);
            scoreArea.append(winnerComputer);
        } else if(humanChoice == "scissor") {
            winnerComputer.style.padding = "0px";

            winnerHuman.textContent = "You win";

            scoreArea.insertBefore(winnerHuman, scoreChild);

            ++humanScore;
        }

    } else if((computerChoice == "scissor")) {
        if(humanChoice == "rock") {
            winnerComputer.style.padding = "0px";
            
            winnerHuman.textContent = "You win";

            scoreArea.insertBefore(winnerHuman, scoreChild);

            ++humanScore;
        } else if(humanChoice == "paper") {
            winnerHuman.style.padding = "0px";
            
            winnerComputer.textContent = "Computer wins";

            scoreArea.append(winnerComputer);

            ++computerScore;
        } else if(humanChoice == "scissor") {
            winnerHuman.textContent = "TIED";
            winnerComputer.textContent = "TIED";

            scoreArea.insertBefore(winnerHuman, scoreChild);
            scoreArea.append(winnerComputer);
        }
    }

    // Update score board
    humanScoreParagraph.textContent = humanScore;
    computerScoreParagraph.textContent = computerScore;
    checkWinner();
}

// DOM
// DOM Selectors
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const divContainer = document.querySelector("#results");

const humanScoreParagraph = document.querySelector("#score #human-score p");
const computerScoreParagraph = document.querySelector("#score #computer-score p");

const scoreArea = document.querySelector("#scoreArea");
const scoreChild = document.querySelector("#score");

// DOM Event Listeners
rockButton.addEventListener("click", function() {
    winnerHuman.textContent = "";
    winnerComputer.textContent = "";

    playRound(getComputerChoice(), "rock");
});

paperButton.addEventListener("click", function() {
    winnerHuman.textContent = "";
    winnerComputer.textContent = "";

    playRound(getComputerChoice(), "scissor");
});

scissorsButton.addEventListener("click", function() {
    winnerHuman.textContent = "";
    winnerComputer.textContent = "";

    playRound(getComputerChoice(), "paper");
});

// DOM elements
const winnerHuman = document.createElement("p");
const winnerComputer = document.createElement("p");