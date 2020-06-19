// time
let minutes = 0,
    seconds = 0;




let timer = function() {
    time = setInterval(function(){
    
        seconds ++

        if( seconds === 60) {
            seconds = 0;
            minutes++;
        }

     time.innerHTML = minutes + ' min :' + ' ' + seconds + ' sec' ;
    }, 1000);

};


//playButton

 const restart  = function() {
    score = 0;
    seconds= 0;
    minutes = 0;
    snake.draw();
    gameScore.innerHTML = 'Score: 0';
    snake = new snakeDraw(); // To remove the snakes tail 
    fruit.pickLocation();// to random the fruit

}; 



