let userScore=0;
let compScore=0;
let audio=new Audio("ting.mp3");
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");
const restart=document.querySelector(".reset");
const genCompChoice = () =>
{
    const options=["rock","paper","scissors"];
    const randomindex=Math.floor(Math.random()*3);
    return options[randomindex];
}
const draw =()=>{
    console.log("The game is drawn")
    msg.innerHTML="Game was draw.Play again."
    msg.style.backgroundColor="black";
}
const showWinner =(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerHTML=userScore;
        console.log("You win");
        msg.innerText=`You win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorepara.innerHTML=compScore;
        console.log("You loss")
        msg.innerText=`You loss.${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame = (userChoice) => {
    console.log("User Choice is ",userChoice)
    //generate for computer
    const compChoice=genCompChoice();
    console.log("Computer choice is ",compChoice);

    if(userChoice==compChoice){
        draw();
    }
    else{
        userWin=true;
        if(userChoice=="rock"){
            userWin=compChoice=="paper"?false:true;
        }
        else if(userChoice=="paper"){
            userWin=compChoice=="scissors"?false:true;
        }
        else{
            userWin=compChoice=="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}
choices.forEach((choice) => {
   
    choice.addEventListener("click",() => {
        const userChoice=choice.getAttribute("id");
        audio.play();
        playGame(userChoice);
    });
});

const reset =()=>{
    userScorepara.innerHTML=userScore=0;
    compScorepara.innerHTML=compScore=0;
    msg.innerHTML="Play your move";
    msg.style.backgroundColor="black";
}
restart.addEventListener("click",()=>{
    reset();
})