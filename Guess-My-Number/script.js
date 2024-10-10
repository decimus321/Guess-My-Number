'use strict';

let secretNumber = Math.trunc(Math.random()* 10) +1;
let score = 10;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function(){
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);
//when there is no input
    if(!guess){
        displayMessage("No Number!⛔");
    }
    //when the input is < 1 and > 10
    else if(guess < 1 || guess > 10){
        displayMessage("Please enter a number between 1 and 10!⛔");
    }
    //when player wins
    else if(guess===secretNumber){
        displayMessage("Correct Number!🎉");
        document.querySelector(".number").textContent = secretNumber;



        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        
        if(score > highScore){
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
        
    }
    //when guess is wrong
    else if(guess!== secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber? "Too High!📈" : "Too Low!📉");
            
            score --; 
            document.querySelector(".score").textContent = score;
        }
        else{
            displayMessage("You Lost The Game!💥");
            document.querySelector(".score").textContent = 0;

        }
    }
    

});
 

document.querySelector(".again").addEventListener("click", function(){
    score = 10;
    secretNumber = Math.trunc(Math.random()* 10) +1;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".guess").value = "";
    document.querySelector(".score").textContent = 10;
    displayMessage("Start guessing...");
    document.querySelector(".number").textContent = "?";


});


