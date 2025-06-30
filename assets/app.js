let userscore=0;
let computerscore=0;
const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let user=document.querySelector("#user-score");
let comp=document.querySelector("#comp-score");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.id;
        playgame(userChoice);
    });
});
const playgame=(userChoice) =>{
    let userwin=true;
    let compchoice=gencompchoice();
    if(userChoice===compchoice){
        msg.innertext="It's a draw!";
    }else{
        if(userChoice==="rock"){
            userwin = compchoice === "scissors"? true : false;
        }else if(userChoice==="paper"){
            userwin = compchoice === "rock"? true : false;
        }else{
            userwin = compchoice === "paper"? true : false;
        }
        showwinner(userwin, userChoice, compchoice);
    }
};
const gencompchoice=()=>{
    let choices=["rock","paper","scissors"];
    let randomIndex=Math.floor(Math.random()*3);
    return choices[randomIndex];
};
const showwinner=(userwin, userChoice, compchoice)=>{
    if(userwin){
        userscore++;
        user.innerText=userscore;
        msg.innerText=`You win! Your ${userChoice} beats ${compchoice}`;
        msg.style.color="green";
        console.log(userChoice, compchoice);
    }else{
        computerscore++;
        comp.innerText=computerscore;
        msg.innerText=`You lose! ${compchoice} beats Your ${userChoice}`;
        msg.style.color="red";
        console.log(userChoice, compchoice);
    }
};