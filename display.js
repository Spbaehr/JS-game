// NOTE: depends on game.js

var game = null;

function setup(){
    var width = 400;
    var height = 500;
    game = createGameState();
    frameRate(15);
    createCanvas(width, height); 
}

function draw(){
    updateGameState(game);
    if (game.isDead)
        background("black");
    else
        background("turquoise");    
    drawGameState(game);
}

var pointSize = 40;
var pointSpacing = 50;
var margin = 50;
var colors = [
    "#3f51b5",
    "#03a9f5",
    "#ea1e63",
    "#fec107"
];

function drawPoint(x,y,colorIndex){
    fill(colors[colorIndex]);
    var jitter = random(5);
    ellipse(
        x * pointSpacing + margin, 
        y * pointSpacing + margin, 
        pointSize + jitter);
}

function keyPressed() {
    console.log(`keyPressed: ${keyCode}`);
    if (keyCode == 38) game.playerY--;
    if (keyCode == 40) game.playerY++;
    if (keyCode == LEFT_ARROW) game.playerX--;
    if (keyCode == RIGHT_ARROW) game.playerX++;

    if (game.playerX >= game.cols) game.playerX = 0;
    if (game.playerY >= game.rows) game.playerY = 0;

    if (game.playerX < 0) game.playerX = game.cols-1;
    if (game.playerY < 0) game.playerY = game.rows-1;
}
