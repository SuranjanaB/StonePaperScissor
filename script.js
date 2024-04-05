let user=0;
let comp=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let uScore=document.querySelector("#user-score");
let cScore=document.querySelector("#comp-score");
let reset=document.querySelector("#reset");
const compChoiceGen=()=>{
    const vals=["rock","paper","scissors"];
    const choo=Math.floor(Math.random()*3);
    const compChoice=vals[choo];
    return compChoice;
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        user++;
        uScore.innerText=user;
        console.log("you win");
        msg.innerText=`You Win😃!! Your ${userChoice} beats ${compChoice}`;
        //msg.style.backgroundColor="green";
    }else{
        comp++;
        cScore.innerText=comp;
        console.log("you lose");
        msg.innerText=`You Lose☹️!! ${compChoice} beats  your ${userChoice}`;
        //msg.style.backgroundColor="red";
    }
}
const drawGame=()=>{
    console.log("Game draw");
    msg.innerText=`Game Draw!🫥 Play Again...`
}
const playGame=(userChoice)=>{
    const compChoice=compChoiceGen();
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            if(compChoice==="paper"){
                userWin=false;
            }else{
                userWin=true;
            }
        }else if(userChoice==="paper"){
            if(compChoice==="rock"){
                userWin=true;
            }else{
                userWin=false;
            }
        }else{
            if(compChoice==="rock"){
                userWin=false;
            }else{
                userWin=true;
            }
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});

reset.addEventListener("click",()=>{
    user=0;
    comp=0;
    uScore.innerText=user;
    cScore.innerText=comp;
    msg.innerText="Play your move";
});