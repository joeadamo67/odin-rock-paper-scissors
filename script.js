const computerScore = document.querySelector(".computerScore");
const playerScore = document.querySelector(".playerScore");
const ties = document.querySelector(".ties");

const mainMessage = document.querySelector("#mainMessage");

const buttons = document.querySelectorAll('button');

const roundResult = document.querySelector('#roundResult');

const table = document.querySelector("#matchHistory");

const tableLable = document.querySelector(".matchHistoryLable");


function addToMatchHistory() {
    table.setAttribute('style', '  visibility: visible;');    
    tableLable.setAttribute('style', '  visibility: visible;');    

    const tableRow = document.createElement('tr');


    if (arguments[0] == "W"){
        let tableDetails = document.createElement('td');
        tableDetails.innerText = "Player";
        tableRow.appendChild(tableDetails);
    } else {
        let tableDetails = document.createElement('td');
        tableDetails.innerText = "Computer";
        tableRow.appendChild(tableDetails);
    }

    for (let i = 1; i < arguments.length; i++) {
            let tableDetails = document.createElement('td');
            tableDetails.innerText = arguments[i];
            tableRow.appendChild(tableDetails);
    }

    table.appendChild(tableRow);
}
const getComputerChoice = ()=>{
    let choice = Math.floor(Math.random()*3);
    if (choice == 0){
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

const playRound = (computerChoice, playerChoice) => {
    if (playerChoice == "rock"){
        if (computerChoice == "rock"){
            return "You Tied! Rock on Rock!";
        } else if (computerChoice == "paper"){
            return "You Lost! Paper beats Rock!";
        } else {
            return "You Won! Rock beats Scissors!"
        }
    } else if (playerChoice == "paper"){
        if (computerChoice == "rock"){
            return "You Won! Paper beats Rock!";
        } else if (computerChoice == "paper"){
            return "You Tied! Paper on Paper!";
        } else {
            return "You Lost! Scissors beats Paper!"
        }
    } else {
        if (computerChoice == "rock"){
            return "You Lost! Rock beats Scissors!";
        } else if (computerChoice == "paper"){
            return "You Won! Scissors beats Paper!";
        } else {
            return "You Tied! Scissors on Scissors!"
        }
    }
}



let playerGamesWon = 0;
let computerGamesWon = 0;
let numberOfTies = 0;

let updateScores = ()=>{
    playerScore.textContent = playerGamesWon;
    computerScore.textContent = computerGamesWon;
    ties.textContent = numberOfTies;
}
let checkWinner = (winnerString)=>{

        let temp = winnerString.slice(4,5);

        if (temp == "W"){
            playerGamesWon++;
            updateScores();
        } else if (temp == "L"){
            computerGamesWon++;
            updateScores();
        } else {
            numberOfTies++;
            updateScores();
        }

        if (playerGamesWon == 5){
            mainMessage.textContent = "You won "+playerGamesWon+" to "+computerGamesWon
            +" with "+numberOfTies+" ties. Resetting the game!";

            addToMatchHistory(temp, playerGamesWon, computerGamesWon, numberOfTies);
            playerGamesWon = 0;
            computerGamesWon = 0;
            numberOfTies = 0;

            updateScores();


        } else if (computerGamesWon ==5){
            mainMessage.textContent = "You lost "+computerGamesWon+" to "+playerGamesWon
            +" with "+numberOfTies+" ties. Resetting the game!";
            addToMatchHistory(temp, playerGamesWon, computerGamesWon, numberOfTies);

            playerGamesWon = 0;
            computerGamesWon = 0;
            numberOfTies = 0;
            updateScores();

        }
        

}




buttons.forEach((button) => {


    button.addEventListener('click', () => {
        roundResult.textContent = playRound(getComputerChoice(), button.id);
        checkWinner(roundResult.textContent);


    });

  });