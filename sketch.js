
var database,gameState=0,playerCount;
var form,game,player,allPlayers;

function setup(){
    createCanvas(500,500);
   database = firebase.database(); 
   game = new Game();
game.getState();
game.start();
   
}

function draw(){
    background("white");

    if(playerCount===4){
        game.update(1);


    }

    
}



