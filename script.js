

let getComputerChoice = ()=>{
    let choice = Math.floor(Math.random()*3);
    console.log(choice);
    if (choice == 0){
        return "Rock";
    } else if (choice == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}