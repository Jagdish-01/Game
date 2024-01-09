let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll
(".choice");
const msg =document.querySelector("#msg");

const userscorep = document.querySelector("#user-score");
const compscorep = document.querySelector("#comp-score");
const genretcomchoice = () => {
    const option = ["rock", "paper", "scissor"];
    const randidx = Math.floor(Math.random() * 3);
    return option[randidx];

};

const DrawGame = () => {
    console.log("game was draw.");
    msg.innerText="Game was Drow Play again";
    msg.style.backgroundColor = "#081b31";

}
const showwiner = (userwin,userchoice,compchoice) =>{
    if(userwin){
        userscore++;
        userscorep.innerText = userscore;
        msg.innerText=`You win ! your ${userchoice} beats ${compchoice}`; 
        msg.style.backgroundColor = "green";
        
    }else{
        compscore++;
        compscorep.innerText = compscore;
       
        msg.innerText=`You loss ! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";

    }
}

const playgame = (userchoice)=>{
console.log("user choice =",userchoice);
// genret computer th choce
const compchoice = genretcomchoice();
console.log("comp choice = ",compchoice);

 if(userchoice === compchoice){

    DrawGame();
 }
   else
 {
    let userwin =true;
    if(userchoice === "rock")
    {
        userwin=compchoice ==="paper" ? false: true;

    }else if(userchoice === "paper"){
        userwin=compchoice === "scissor" ? false : true;

    }else{
        userwin=compchoice=== "rock" ? false:true;
    }
    showwiner(userwin,userchoice,compchoice);
 }

};
choices.forEach((choice) => {
    
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
