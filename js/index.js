//SETTING THE VARIABLES 
let order = []; //keep track of order of game lights 
let playerOrder = []; //order in which the player presses the lights 
let flash; //number of light flashes in game 
let turn; //to keep track of what turn a player is on 
let good; //boolean - has the player hit the correct color? 
let compTurn; //boolean - is it the players turn or the computers turn? 
let intervalId;
let on = false; //sets power button to off at start of game/before gameplay 
let win; //has the player won the game?

//TO SELECT THE HTML ELEMENTS and INITIALIZE AS VARIABLES
//THESE ARE ALL ELEMENTS THAT THE PLAYER CAN INTERACT WITH 
//The document method querySelector() returns the first Element within the document that matches the specified selector which we pass in 
const turnCounter = document.querySelector("#turn");
const topLeft = document.querySelector("#topleft"); 
const topRight = document.querySelector("#topright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");