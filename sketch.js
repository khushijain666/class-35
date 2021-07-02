var form,player,game
var gameState=0
var playerCount
var database;

function setup(){
    createCanvas(4000,400);
    database=firebase.database();
    game=new Game()
    game.getState()
    game.start()
    
}

function draw(){
    
}