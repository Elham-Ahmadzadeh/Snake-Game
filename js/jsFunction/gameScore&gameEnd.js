
// Score

let score = 0;

let scoreCounting = function() {
    score ++;
    gameScore.innerHTML = 'Score:' + ' ' + score;
   
};

// CLEAR CANVAS
let clearCanvas = function() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeRect(0, 0, canvas.width, canvas.height);

};


    




