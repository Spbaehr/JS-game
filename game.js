// functions

function createGameState(){
    var game= {};

    game.isDead = false;
    game.playerX = 2;
    game.playerY = 2;
    game.coinX = 0;
    game.coinY = 0;
    game.score = 0;

    var grid= [];
    grid.push([1,1,1,1,1]);
    grid.push([1,0,0,0,1]);
    grid.push([1,0,0,0,1]);
    grid.push([1,0,0,0,1]);
    grid.push([1,0,0,0,1]);
    grid.push([1,0,0,0,1]);
    grid.push([1,0,0,0,1]);
    grid.push([1,1,1,1,1]);

    game.grid = grid;

    game.rows = grid.length;
    game.cols = grid[0].length;

    setRandomCoin(game);

    return game;
}
function createEmptyGrid(){

}
function createLevel(game){
  
}
function setRandomCoin(game){

    var collided = true;

    while(collided){
        game.coinX = Math.floor(random(game.cols - 1));
        game.coinY = Math.floor(random(game.rows - 1));
    

    var x = game.coinX;
    var y = game.coinY;

    var hitWall = (game.grid[y][x] == 1);

    var hitPlayer = hitCoin(game);
    collided = hitWall||hitPlayer;
    }
}
function hitCoin(game){
    return game.coinX == game.playerX && game.coinY == game.playerY;
}
function drawGameState(game){
    for(var c = 0; c < game.cols; c++) {
        for(var r = 0; r < game.rows; r++) {
            drawPoint(c, r, game.grid[r][c]);
        }
    }
    fill("red");
    drawPoint(game.playerX, game.playerY, 2);
    drawPoint(game.coinX, game.coinY, 3);
    fill("orange");
    text(`score-${game.score}`, 10, 10,);

}
function updateGameState(){
    var x = game.playerX;
    var y = game.playerY;
    if (game.grid[y][x] == 1) game.isDead = true;

    if (hitCoin(game)){
        game.score += 100;
        setRandomCoin(game);
    }
}
function addNextCoin(){

}
function handleKeyboard(){

}
function checkPlayerPosition(){
    
}