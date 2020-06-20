
// Score

let score = 0;
let scoreCounting = function() {
    score ++;
    gameScore.innerHTML = 'Score:' + ' ' + score;
   
};

// CLEAR CANVAS

let clearCanvas = function() {



ctx.font = 'bold 100px';
up.style.display = 'none';
down.style.display = 'none';
left.style.display = 'none';
right.style.display = 'none';

};


    




