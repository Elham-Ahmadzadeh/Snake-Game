// time
let minutes = 0,
    seconds = 0;




let timer = function() {
    timer = setInterval(function(){
    
        seconds ++

        if( seconds === 60) {
            seconds = 0;
            minutes++;
          
        }

     time.innerHTML = minutes + ' min :' + ' ' + seconds + ' sec' ;
    }, 1000);

    
};

// to make it harder

let checkScore = function() {
    if ( score === 8  ) {
        window.setInterval(() =>  {   // window put the speed
          
            
            snake.upDate();
            snake.draw();
            if (snake.eat(fruit)) {
                fruit.pickLocation();
                 scoreCounting();
                 checkScore();
              
            }
          
     
        }, 180)

} else if (score === 15 ) {
    window.setInterval(() =>  {
          
            
        snake.upDate();
        snake.draw();
        if (snake.eat(fruit)) {
            fruit.pickLocation();
             scoreCounting();
             checkScore();
          
        }
      
 
    }, 150)

} else if ( score === 25 )
window.setInterval(() =>  {
          
            
    snake.upDate();
    snake.draw();
    if (snake.eat(fruit)) {
        fruit.pickLocation();
         scoreCounting();
         checkScore();
      
    }
  

}, 130)
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



