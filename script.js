let user = document.querySelector("#user");
let comp = document.querySelector("#comp");
let userScore =0;
let compScore = 0;
const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

const draw = ()=>{
    console.log("Draw");
    msg.innerText = "Match Draw, Play Again."
}

const genCompChoice = ()=>{
    const options = ["rock", "paper", "scissor"];
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];

}

const showWinner = (userWin)=>{
    if(userWin){
        console.log("You Win");
        msg.innerText = "You Win."
        userScore++;
        user.innerText = userScore;
    }
    else{
        console.log("Computer Win");
        msg.innerText = "You Lose."
        compScore++;
        comp.innerText = compScore;
    }
}

const playGame = (userChoice)=>{
    console.log(userChoice);
    const compChoice = genCompChoice();
    console.log(compChoice);

    if(userChoice===compChoice){
        draw();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin = compChoice==="scissor"?false:true;           
        }
        else{
            userWin = compChoice==="rock"?false:true;          
        }
        showWinner(userWin);
    }
}

choices.forEach((choice)=>{
   
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})