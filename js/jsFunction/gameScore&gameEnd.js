
// Score

let score = 0;
let scoreCounting = function() {
    score ++;
    gameScore.innerHTML = 'Score:' + ' ' + score;
   
};

// CLEAR CANVAS

controls2 = document.querySelector('#controls2'),
controls3 = document.querySelector('#controls3');
let clearCanvas = function() {
ctx.fillStyle = '#000';
ctx.textBaseline = 'middle';
ctx.fillText('Game Over!!', 175, 150, 300);
ctx.strokeStyle = 'white';
ctx.font = 'bold 60px';
up.style.display = 'none';
down.style.display = 'none';
left.style.display = 'none';
right.style.display = 'none';

};


    




