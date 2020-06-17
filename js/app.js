/*

Set up the canvas
Set score to Zero
Create snake
Create apple

Every 100 millisceseconds {
    Cleaar the canva
    Draw current score on the screen 
    Move snake in current direction
    
    If snake collids with wall of itself {
        End the game
    } Else if snake eats an
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

// VARIABLES 

const canvas = document.getElementById('canvas'),
    palyButton = document.getElementById('play'),
    ctx = canvas.getContext("2d"),
    scale = 10,
    rows = canvas.height / scale,
    columns = canvas.width / scale;


let gameScore = document.getElementById('score');


var snake;

//ctx.font = "30px Ariel" ;                                           // to make sure my browser supports ctx
//ctx.strokeText("Hello world", 10, 50);



//*************************************************

// SETUP FUNCTION

//************************************************/


(function setup() {



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

            //*************************************** */


        }
    }, 250);
}());

//*************************************************


