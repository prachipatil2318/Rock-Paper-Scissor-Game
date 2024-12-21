let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
}

const drawGame =()=>{
    console.log("Game was Draw");
    msg.innerText = "Game was Draw...Try again";
    msg.style.backgroundColor = "#081b31";
}

let showWinner = (userWin,userChoice,compChoice) => {
    if(userWin == true)
    {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!!!");
        msg.innerText = `You Win!!!Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lose...");
        msg.innerText = `You Lose...${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice)=>{
    // console.log("User Choice =",userChoice);
    // Generate Computer choice
    const compChoice = genCompChoice();
    // console.log("Computer Choice =",compChoice);

    if(userChoice === compChoice){
        // Draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice == "rock"){
            // scissors, paper
            userWin = compChoice == "paper" ? false : true; 
        } else if (userChoice == "paper"){
            // rock, scissors
            userWin = compChoice == "scissors" ? false: true;

        } else {
            // paper, rock
            userWin = compChoice == "rock" ? false :true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log(`${choiceId} was choose`);
        playGame(userChoice);
    });
});