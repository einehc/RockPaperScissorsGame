let rockBtn = document.querySelector ("#rockBtn");
let scissorsBtn = document.querySelector ("#scissorsBtn");
let paperBtn = document.querySelector ("#paperBtn");


rockBtn.addEventListener ("click", rockFunction);
scissorsBtn.addEventListener ("click", scissorsFunction);
paperBtn.addEventListener ("click", paperFunction);

let playerScore = 0;
let botScore = 0;
document.querySelector("#displayPlayerScore").innerHTML=playerScore;
document.querySelector("#displayBotScore").innerHTML=botScore;

function rockFunction (){
    let botOptions = ["Rock", "Paper", "Scissors"];
    let choiceNumber = Math.floor (Math.random () * 3);
    let botChoice = botOptions [choiceNumber];
    let gameHistory = document.querySelector ("#gameHistory");
    let li = document.createElement ("li");

    document.querySelector("#displayBotAnswer").innerHTML=botChoice;
   
     if( botChoice == "Rock"){
    
        document.querySelector ("#displayResult").innerHTML = "It's a Tie";
        li.classList ="list";
        li.textContent = "Rock Vs Rock. Draw. Try Again";
        gameHistory.appendChild(li);
     

     }else if(botChoice == "Paper"){
        document.querySelector ("#displayResult").innerHTML = "Computer Won";
        botScore++;
        document.querySelector ("#displayBotScore").innerHTML = botScore;
        li.textContent = "Rock Vs Paper. Computer Won";
        li.style.color = "rgb(42, 151, 53)";
        gameHistory.appendChild(li);
        

    }else{
         document.querySelector ("#displayResult").innerHTML = "Player Won";
         playerScore++;
         document.querySelector ("#displayPlayerScore").innerHTML = playerScore;
         li.style.color = "rgb(15, 120, 188)";
         li.textContent = "Rock Vs Scissors. Player Won";
         gameHistory.appendChild(li);
        
    }

    if (playerScore == 5){
        alert ("You Picked Rock, Bot Picked" + " " + botChoice)
        alert ("GAME OVER, YOU WIN!")
        document.location.reload();
        
    }else if (botScore == 5) {
        alert ("You Picked Rock, Bot Picked" + " " + botChoice)
        alert ("GAME OVER, BOT WINS!")
        document.location.reload();
    }
 
}

 


function scissorsFunction (){
    let botOptions = ["Rock", "Paper", "Scissors"];
    let choiceNumber = Math.floor (Math.random () * 3);
    let botChoice = botOptions [choiceNumber];
    let gameHistory = document.querySelector ("#gameHistory");
    let li = document.createElement ("li");

    
    document.querySelector("#displayBotAnswer").innerHTML=botChoice;

     if( botChoice == "Scissors"){
        document.querySelector ("#displayResult").innerHTML = "It's a Tie";
        li.textContent = "Scissors Vs Scissors. Draw. Try Again";
        gameHistory.appendChild(li);
        
   
     }else if(botChoice == "Rock"){
        document.querySelector ("#displayResult").innerHTML = "Computer Won";
        botScore++;
        document.querySelector ("#displayBotScore").innerHTML = botScore;
        li.textContent = "Scissors Vs Rock. Computer Won";
        li.style.color = "rgb(42, 151, 53)";
        gameHistory.appendChild(li);
       

    }else{
         document.querySelector ("#displayResult").innerHTML = "Player Won";
         playerScore++;
         document.querySelector ("#displayPlayerScore").innerHTML = playerScore;
         li.style.color = "rgb(15, 120, 188)";
         li.textContent = "Scissors Vs Paper. Player Won";
         gameHistory.appendChild(li);
   

    }  

    if (playerScore == 5){
        alert ("You Picked Scissors, Bot Picked" + " " + botChoice)
        alert ("GAME OVER, YOU WIN!")
        document.location.reload();
    }else if (botScore == 5) {
        alert ("You Picked Scissors, Bot Picked" + " " + botChoice)
        alert ("GAME OVER, BOT WINS!")
        document.location.reload();
    }
}



function paperFunction (){
    let botOptions = ["Rock", "Paper", "Scissors"];
    let choiceNumber = Math.floor (Math.random () * 3);
    let botChoice = botOptions [choiceNumber];
    let gameHistory = document.querySelector ("#gameHistory");
    let li = document.createElement ("li");


    document.querySelector("#displayBotAnswer").innerHTML=botChoice;

     if( botChoice == "Paper"){
        document.querySelector ("#displayResult").innerHTML = "It's a Tie";
        li.textContent = "Paper Vs Paper. Draw. Try Again";
        gameHistory.appendChild(li);
  

     }else if(botChoice == "Scissors"){
        document.querySelector ("#displayResult").innerHTML = "Computer Won";
        botScore++;
        document.querySelector ("#displayBotScore").innerHTML = botScore;
        li.textContent = "Paper Vs Scissors. Computer Won";
        li.style.color = "rgb(42, 151, 53)";
        gameHistory.appendChild(li);


    }else{
         document.querySelector ("#displayResult").innerHTML = "Player Won";
         playerScore++;
         document.querySelector ("#displayPlayerScore").innerHTML = playerScore;
         li.style.color = "rgb(15, 120, 188)";
         li.textContent = "Paper Vs Rock. Player Won";
         gameHistory.appendChild(li);
        
    }
    if (playerScore == 5){
        alert ("You Picked Paper, Bot Picked" + " " + botChoice)
        alert ("GAME OVER, YOU WIN!")
        document.location.reload();
    }else if (botScore == 5) {
        alert ("You Picked Paper, Bot Picked" + " " + botChoice)
        alert ("GAME OVER, BOT WINS!")
        document.location.reload();
    }
}
  



