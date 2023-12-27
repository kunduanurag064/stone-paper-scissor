var playing = ["stone", "paper", "scissor"];
let userscore = 0;
let compscore = 0;

let score_use = document.querySelector("#userScor");
let score_com = document.querySelector("#compscor");

let shownresult = document.querySelector("#result-view");

let resetButton = document.querySelector("#reset-btn");
resetButton.addEventListener("click" , function(){
    shownresult.textContent="Start New Game!";
    userscore=0;
    compscore=0;
    score_use.textContent = userscore;
    score_com.textContent = compscore;
});

let button1 = document.querySelector("#btn1");
let button2 = document.querySelector("#btn2");
let button3 = document.querySelector("#btn3");

button1.addEventListener("click" , function(){
    let compChoice = playing[compTurn()];
    checkWinner("stone" , compChoice);
    score_use.textContent = userscore;
    score_com.textContent = compscore;
});
button2.addEventListener("click" , function(){
    let compChoice = playing[compTurn()];
    checkWinner("paper" , compChoice);
    score_use.textContent = userscore;
    score_com.textContent = compscore;
});
button3.addEventListener("click" , function(){
    let compChoice = playing[compTurn()];
    checkWinner("scissor" , compChoice);
    score_use.textContent = userscore;
    score_com.textContent = compscore;
});



function compTurn() {
    return Math.floor(Math.random() * 3);
}

function checkWinner(a, b) {
    if (a === b) {
        shownresult.textContent=`Draw! You both choose ${a}`;
    } else {
        if (a === "paper" && b === "stone") {
            shownresult.textContent=`You won! Your choice: ${a} Comp choice: ${b}`;
            userscore++;
        } else if (a === "paper" && b === "scissor") {
            shownresult.textContent=`You lose! Your choice: ${a} Comp choice: ${b}`;
            compscore++;
        } else if (a === "stone" && b === "paper") {
            shownresult.textContent=`You lose! Your choice: ${a} Comp choice: ${b}`;
            compscore++;
        } else if (a === "stone" && b === "scissor") {
            shownresult.textContent=`You won! Your choice: ${a} Comp choice: ${b}`;
            userscore++;
        } else if (a === "scissor" && b === "paper") {
            shownresult.textContent=`You won! Your choice: ${a} Comp choice: ${b}`;
            userscore++;
        } else if (a === "scissor" && b === "stone") {
            shownresult.textContent=`You lose! Your choice: ${a} Comp choice: ${b}`;
            compscore++;
        }
    }
}


