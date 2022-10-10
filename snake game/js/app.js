import {update as updateSnake, draw as drawSnake,
     SNAKE_SPEED ,getSnakeHead,snakeIntersection,} from './utillities.js';
import{update as updateFood , draw as drawFood} from './food.js'
import {outSideGrid } from './grid.js'
let lastRenderTime = 0;
let gameOver = false;
const game_Board = document.querySelector("#game-board ")
function main(currentTime){ 
    if(gameOver){
      if(confirm("you lost. press ok to restart")){
          window.location = '/'
      }
      return
    }
    window.requestAnimationFrame(main)
    const secondsSinceLastTime = (currentTime-lastRenderTime)/1000;
    if(secondsSinceLastTime < 1/ SNAKE_SPEED) return
    console.log("current");
 
    
    lastRenderTime = currentTime;
    update()
    draw()
}
window.requestAnimationFrame(main)
//update function
function update(){
updateSnake()
updateFood()
checkDeath()
}

//draw function
function draw(){ 
    game_Board.innerHTML=''
    drawSnake(game_Board)
    drawFood(game_Board)
    
}
   
function checkDeath(){
    gameOver = outSideGrid(getSnakeHead()) || snakeIntersection()
}

   