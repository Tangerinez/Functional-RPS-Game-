/* Variables from DOM elements */

let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.getElementsByClassName("score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

/* Game Mechanics */

function computerGuess() {          /* Computer guesses either r, p, or s from an array */
    var computerChoices = ["r", "p", "s"];
    var randomNumber = Math.floor(Math.random() * 3);
    return computerChoices[randomNumber];
}

function convertChoice(letter) {       /* Converts letter taken from array to a string choice */
    if (letter === "r") {
        return "Rock";
    } else if (letter === "p") {
        return "Paper";
    }
    return "Scissors";
}

function userWin(userChoice, computerChoice) {  /* If user wins */
    const smallUserword = "user".fontsize(3).sub();      /* subscripts to identify who picked what */
    const smallCompword = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertChoice(userChoice) + smallUserword + " beats " + convertChoice(computerChoice) + smallCompword + ". You win!"; /* Text that is displayed after picking something */
    userChoice_div.classList.add("green-glow");  /* classList.add() allows you to add HTML styled class onto an element - green glow for win */
    setTimeout(function() {
        userChoice_div.classList.remove("green-glow") 
    }, 300);     /* removes green glow for winning after 300ms */
}

function userLose(userChoice, computerChoice) {     /* If user loses */
    const smallUserword = "user".fontsize(3).sub();      /* subscripts to identify who picked what */
    const smallCompword = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);    /* Variable for using userChoice parameter */
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertChoice(userChoice) + smallUserword + " loses to " + convertChoice(computerChoice) + smallCompword + ". You lose..."; /* Text that is displayed after picking something */
    userChoice_div.classList.add("red-glow");  /* classList.add() allows you to add HTML styled class onto an element - red glow for lose */
    setTimeout(function() {
        userChoice_div.classList.remove("red-glow") 
    }, 300);   /* removes green glow for losing after 300ms */
}

function userDraw(userChoice, computerChoice) {      /* If user draws */
    const smallUserword = "user".fontsize(3).sub();      /* subscripts to identify who picked what */
    const smallCompword = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = convertChoice(userChoice) + smallUserword + " is the same as " + convertChoice(computerChoice) + smallCompword + ". Draw!"; /* Text that is displayed after picking something */
    userChoice_div.classList.add("gray-glow");  /* classList.add() allows you to add HTML styled class onto an element - gray glow for draw*/
    setTimeout(function() {
        userChoice_div.classList.remove("gray-glow") 
    }, 300);    /* removes gray glow for drawing after 300ms */
}

function game(userChoice) {    /* Goes through all scenarios of the game */
    var computerChoice = computerGuess();
    var name = "pine";
    switch (userChoice + computerChoice) {      
        case "rs":
        case "pr":
        case "sp":
            userWin(userChoice, computerChoice) ; /* Win conditions for user */
            break;
        case "rp":
        case "sr":
        case "ps":
            userLose(userChoice, computerChoice) ; /* Lose conditions for user */
            break;
        case "rr":
        case "pp":
        case "ss":
            userDraw(userChoice, computerChoice) ; /* Draw conditions for user */
            break;
    }
}

function main() {
    rock_div.addEventListener("click", function() {   /* rock button */
    game("r");
    });

    paper_div.addEventListener("click", function() {    /* paper button */
    game("p");
    });

    scissors_div.addEventListener("click", function() {     /* scissors button */
    game("s");
    });
}
main();

