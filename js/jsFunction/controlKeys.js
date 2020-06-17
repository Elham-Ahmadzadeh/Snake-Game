

window.addEventListener('keydown', ((evt) => {
//console.log(evt); to see the keys are working

const direction = evt.key.replace('arrow', '');
//console.log(direction);    // whenever you press the keys you will see them on console
snake.changeDirection(direction);

}))

