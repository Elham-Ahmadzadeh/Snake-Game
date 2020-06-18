
// Score

let score = 0;

let scoreCounting = function() {
    score ++;
    gameScore.innerHTML = 'Score:' + ' ' + score;
   
};
let snakeMaxLength = (w - 2) * ( h - 2 ) - 1,
    snakeMinLength = 15;


    


// Ending the game
const button = document.createElement('div');

let endGame = function() {
    clearTimeout(timeStart);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    gameEnd.style.display = 'block';
    if(snake.tail.length === snakeMaxLength) {

        button.innerText = 'YOU WON!\nSCORE: ' +
        score.toString() + '\n Restart';

    } else {
        button.innerText = 'GAME OVER!\nSCORE: ' +
        score.toString() + '\n Restart';
    }
   
    

} 



