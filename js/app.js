/*

Set up the canvas
Set score to Zero
Create snake
Create apple

Every 100 millisceseconds {
   
    Draw current score on the screen 
    Move snake in current direction
    
    
      if snake eats an
    Draw apple {
        add one to score 
        Move apple to new location
        Make snake longer
    }

    For each segment of the snake {
        Draw the segment 
    }

    Draw apple 
    Draw border

  }

When the user press a key {
    If the key is an arrow {
        Update the direction of the snake
    }
}

}

*/

// VARIABLES and DOMS TAGS

const canvas = document.getElementById('canvas'),
    playButton = document.getElementById('play'),
    time = document.getElementById('time'),
    left = document.getElementById('left'),
    right = document.getElementById('right'),
    up = document.getElementById('up'),
    down = document.getElementById('down'),
    gameEnd = document.getElementById('gameEnd').style.display = 'none',
    gameOverBtn = document.querySelector('#gameOverBtn'),
    ctx = canvas.getContext("2d"),
    
  
    scale = 10,
    rows = canvas.height / scale,
    columns = canvas.width / scale;


let gameScore = document.getElementById('score');

let timeStart = Date.now();

var snake;

//ctx.font = "30px Ariel" ;                                           // to make sure my browser supports ctx
//ctx.strokeText("Hello world", 10, 50);



//*************************************************

// SETUP FUNCTION

//************************************************/


(function setup() {   // Local Function

setTimeout(timer,1000);  // after 1 sec timer starts counting

//THE ARRAY CONSTRUCTOR CREATES NEW ARRAYS DEPENDING ON ARGUMENTS IT RECEIVES
    snake = new snakeDraw();
    fruit = new fruit();

    fruit.pickLocation();

    console.log(fruit); // we gonna use the x and y of the fruit inside our codes

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        fruit.draw();
        snake.upDate();
        snake.draw();

        //***************************************** */

        // The snake should become longer after eating the fruit so we need if condition here.

        //**************************************** */
        if (snake.eat(fruit)) {
          
            //console.log('EATING'); // when the snake hits the fruit it prints eating 

            //************************************* */
            //after eating the fruit it has to Change the location

            fruit.pickLocation();
             scoreCounting();
           
            //*************************************** */

          
        }
    }, 250);
  
}());

//*************************************************

//play button
playButton.addEventListener('click',restart);
   