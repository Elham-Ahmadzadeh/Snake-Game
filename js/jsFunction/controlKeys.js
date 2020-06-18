
//KEYBORD CONTROLS

window.addEventListener('keydown', ((evt) => {
//console.log(evt); to see the keys are working

const direction = evt.key.replace('arrow', '');
//console.log(direction);    // whenever you press the keys you will see them on console
snake.changeDirection(direction);

}))



//BUTTON CONTROLS 

up.addEventListener('click', function(){
    snake.xSpeed = 0;
    snake.ySpeed = -scale * 1;   
});


down.addEventListener('click', function(){
    snake.xSpeed = 0;
    snake.ySpeed = scale * 1;
});


right.addEventListener('click',function() {
    snake.xSpeed = scale * 1;;
    snake.ySpeed = 0;
});


left.addEventListener('click', function() {
    snake.xSpeed = -scale * 1;
    snake.ySpeed = 0;
});
