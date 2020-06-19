
// Score

let score = 0;

let scoreCounting = function() {
    score ++;
    gameScore.innerHTML = 'Score:' + ' ' + score;
   
};


let clearCanvas = function() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeRect(0, 0, canvas.width, canvas.height);

}
    


// Ending the game
if( snake.y === snake.tail || snake.x === snake.tail) {
    console.log('game over');
    clearCanvas();
}

