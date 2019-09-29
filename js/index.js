//SETTING THE VARIABLES 
let order = []; //keep track of order of game lights 
let playerOrder = []; //order in which the player presses the lights 
let flash; //number of light flashes in game 
let good; //boolean - has the player hit the correct color? 
let compTurn; //boolean - is it the players turn or the computers turn? 
let intervalId;
let difficult = false; //has the strict button been pressed, false starts it unchecked
let on = false; //sets power button to off at start of game/before gameplay 
let win; //has the player won the game?

//TO SELECT THE HTML ELEMENTS and INITIALIZE AS VARIABLES
//THESE ARE ALL ELEMENTS THAT THE PLAYER CAN INTERACT WITH 
const topLeft = document.querySelector("#topleft"); 
const topRight = document.querySelector("#topright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");
const difficultButton = document.querySelector("#difficult");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");

//Coded in order of how the game is played 

//STRICT BUTTON 
//'click' fires for <input> elements when an alteration to the element's value is committed by the user.

difficultButton.addEventListener('click', (event) => {
    if (difficultButton.checked == true) {
        difficult = true;
    } else {
        difficult = false; 
    }
});
