

let getComputerChoice = ()=>{
    let choice = Math.floor(Math.random()*3);
    if (choice == 0){
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

let playRound = (computerChoice, playerChoice) => {
    
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

let getUserChoice = ()=>{
    let invalid = true;
    while (invalid) {
    let playerChoice = prompt("Choose Rock, Paper, or Scissors");
    playerChoice = playerChoice.toLowerCase();
        if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors"){
            return playerChoice;
        }
    }

}


let game = ()=>{
    let playerGamesWon = 0;
    let computerGamesWon = 0;
    let numberOfTies = 0;


        let gameResult = (playRound(getComputerChoice(),getUserChoice()));
        console.log(gameResult);
        let temp = gameResult.slice(4,5);

        if (temp == "W"){
            playerGamesWon++;
        } else if (temp == "L"){
            computerGamesWon++;
        } else {
            numberOfTies++;
        }
    

}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {


    button.addEventListener('click', () => {
      alert(button.id);
    });
  });