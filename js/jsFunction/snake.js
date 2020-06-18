let snakeDraw = function () {
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;


    //to make the snake longer
    this.totalAmountOfFruit = 0; //eaten by the snake
    this.tail = [];

  
    this.draw = function () {
        ctx.fillStyle = 'lightgreen';


        //****************** ***********************/
        // Loop through the tail and draw a rectangle for the tail

        for (let i = 0; i < this.tail.length; i++) {

            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }
        //****************************************** */
        ctx.fillRect(this.x, this.y, scale, scale);
    }


    //************************************************** 

    // Update function to handle the snake on

    // x or y axis

    //**************************************************/

    this.upDate = function () {
      
        //for Loop to make the tail longer. The tail is an array.

        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];

        }



        this.tail[this.totalAmountOfFruit - 1] = {
            x: this.x,
            y: this.y
        };

        this.x += this.xSpeed;
        this.y += this.ySpeed

        if (this.x > canvas.width) {
            this.x = 0; // we see that the snake comes back in the x direction.we should copy this four times for every part 
        }
        if (this.y > canvas.height) {
            this.y = 0;
        }
        if (this.x < 0) {
            this.x = canvas.width;
        }
        if (this.y < 0) {
            this.y = canvas.height;
        }


       

    }

  


    //******************************************** */

    // The keys for controlling the snake. It is located in snakeDraw function. the other codes of controling the snake are located in 
    // controlKeys

    //********************************************** */

    this.changeDirection = function (direction) {
        switch (direction) {

            case 'ArrowDown':
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
                break;

            case 'ArrowUp':
                this.xSpeed = 0;
                this.ySpeed = -scale * 1;
                break;
            case 'ArrowRight':
                this.xSpeed = scale * 1;;
                this.ySpeed = 0;
                break;
            case 'ArrowLeft':
                this.xSpeed = -scale * 1;
                this.ySpeed = 0;
                break;
        }
    };

    this.eat = function (fruit) {

        //console.log(fruit);   // you can see x, y pick location and draw of the fruit. It is located inside the snake draw function

        if (this.x === fruit.x && this.y === fruit.y) {

            this.totalAmountOfFruit++; //we have to increment total
            return true;
        }

        return false;
    }
};



//****************************************************