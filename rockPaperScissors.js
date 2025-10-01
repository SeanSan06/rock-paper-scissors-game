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
        divContainer.appendChild(paragraph);
        disableAllButtons()
    }
    if(humanScore >= 5) {
        divContainer.textContent = "";

        const paragraph = document.createElement("p");
        paragraph.textContent = "You won!";
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
    
    if(computerChoice == "rock") {
        if(humanChoice == "rock") {
            paragraphWinner.textContent = ("Tie this round");
            
            winnerHuman.textContent = "TIED";
            winnerComputer.textContent = "TIED";
            scoreArea.insertBefore(winnerHuman, scoreChild);
            scoreArea.append(winnerComputer);
        } else if(humanChoice == "paper") {
            paragraphWinner.textContent = ("You win this round");
            
            winnerHuman.textContent = "You win";
            scoreArea.insertBefore(winnerHuman, scoreChild);
            ++humanScore;
        } else if(humanChoice == "scissor") {
            paragraphWinner.textContent = ("Computer wins this round");

            winnerComputer.textContent = "Computer wins";
            scoreArea.append(winnerComputer);
            ++computerScore;
        }

    } else if((computerChoice == "paper")) {
        if(humanChoice == "rock") {
            paragraphWinner.textContent = ("Computer wins this round");
            
            winnerComputer.textContent = "Computer wins";
            scoreArea.append(winnerComputer);
            ++computerScore;
        } else if(humanChoice == "paper") {
            paragraphWinner.textContent = ("Tie this round");
                        
            winnerHuman.textContent = "TIED";
            winnerComputer.textContent = "TIED";
            scoreArea.insertBefore(winnerHuman, scoreChild);
            scoreArea.append(winnerComputer);
        } else if(humanChoice == "scissor") {
            paragraphWinner.textContent = ("You win this round");

            winnerHuman.textContent = "You win";
            scoreArea.insertBefore(winnerHuman, scoreChild);
            ++humanScore;
        }

    } else if((computerChoice == "scissor")) {
        if(humanChoice == "rock") {
            paragraphWinner.textContent = ("Human wins this round");

            winnerHuman.textContent = "You win";
            scoreArea.insertBefore(winnerHuman, scoreChild);
            ++humanScore;
        } else if(humanChoice == "paper") {
            paragraphWinner.textContent = ("Computer wins this round");
            
            winnerComputer.textContent = "Computer wins";
            scoreArea.append(winnerComputer);
            ++computerScore;
        } else if(humanChoice == "scissor") {
            paragraphWinner.textContent = ("Tie this round");
                      
            winnerHuman.textContent = "TIED";
            winnerComputer.textContent = "TIED";
            scoreArea.insertBefore(winnerHuman, scoreChild);
            scoreArea.append(winnerComputer);
        }
    }

    // Display what moves were made
    const paragraphPlayer = document.createElement("p");
    paragraphPlayer.textContent = "Player player: " + humanChoice;
    divContainer.appendChild(paragraphPlayer);

    const paragraphComputer = document.createElement("p");
    paragraphComputer.textContent = "Computer player: " + computerChoice;
    divContainer.appendChild(paragraphComputer);

    // Show winner of round
    divContainer.appendChild(paragraphWinner);

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
    divContainer.textContent = "";
    winnerHuman.textContent = "";
    winnerComputer.textContent = "";

    playRound(getComputerChoice(), "rock");
});

paperButton.addEventListener("click", function() {
    divContainer.textContent = "";
    winnerHuman.textContent = "";
    winnerComputer.textContent = "";

    playRound(getComputerChoice(), "scissor");
});

scissorsButton.addEventListener("click", function() {
    divContainer.textContent = "";
    winnerHuman.textContent = "";
    winnerComputer.textContent = "";

    playRound(getComputerChoice(), "paper");
});

// DOM elements
const winnerHuman = document.createElement("p");
const winnerComputer = document.createElement("p");