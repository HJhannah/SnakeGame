/*
    Final Project
    Author: Hannah Jones
    Start Edits: 4-15-24
    Email: HJhannah22@gmail.com
*/

//*Second Page Script
const board = document.querySelector('.board')

//arrays needed
let inputsArray = []
let player1Length = []
//initializing some variables
let foodPositionX = 0
let foodPositionY = 0
let scoreSection = document.getElementById('score')
let score = 0
let endGame = document.getElementById('endGame')
let lostGame = false;
//starting position for players
let player1PositionX = 5
let player1PositionY = 10
//direction of "snake"/player
let directionX = 0
let directionY = 0
//creating elements
let nextPlayerBtn = document.createElement('input')
nextPlayerBtn.setAttribute('type', 'submit')
nextPlayerBtn.setAttribute('id', 'nextPlayerBtn')

//when the user clicks the down arrow key
document.addEventListener('keydown', directionDown)

//getting the colors the users chose
inputsArray = pickedInputs.extractInput()


function game() {

    if (lostGame === true) {
        document.cookie = 'score=' + score + '; path=/index3.html'
        return window.location.href = 'index3.html'
    }
    //creating a new area on the board to put the food position
    let boardObjectsDiv = "<div id='food' style='grid-area: " + foodPositionY + " / " + foodPositionX + "; background: " + inputsArray[1] + "'></div>"

    //if the snake is in same position as food, food goes away, score increases
    if (player1PositionX === foodPositionX & player1PositionY === foodPositionY) {
        //food position changing whenever snake eats the food
        changeFoodPosition()
        player1Length.push(foodPositionX, foodPositionY)
        score += 1
        scoreSection.innerHTML = "Score: " + score
    }

    //shifting the snake so that it gets longer
    for (let j = player1Length.length - 1; j > 0; j--) {
        player1Length[j] = player1Length[j - 1]

    }

    //the "head" of the snake
    player1Length[0] = [player1PositionX, player1PositionY]

    //changing the snake head depending on the user's direction
    player1PositionX += directionX
    player1PositionY += directionY

    //making sure the snake cannot go out of bounds (if it does, game terminates)
    //using 30 bc that is what is set for the .board grid in styles.css
    if (player1PositionX < 0 || player1PositionX >= 32 || player1PositionY < 0 || player1PositionY >= 32) {
        lostGame = true;
    }

    for (let i = 0; i < player1Length.length; i++) {
        //creating a div for each part of the snake
        boardObjectsDiv += "<div id='snakeHead1' style='grid-area: " + player1Length[i][1] + " / " + player1Length[i][0] + "; background: " + inputsArray[0] + "'></div>"
        
        //snake cannot go in the opposite direction, and will end game if hits itself
        if (i !== 0 && player1Length[0][1] === player1Length[i][1] && player1Length[0][0] === player1Length[i][0]) {
            lostGame = true;
        }
    }

    board.innerHTML = boardObjectsDiv
}

function terminateGame() {

    // window.location.href = 'index3.html'
}

//Changing the position of the food so it is not set to the same place every time
function changeFoodPosition() {
    foodPositionX = Math.floor(Math.random() * 30) + 1
    foodPositionY = Math.floor(Math.random() * 30) + 1

}

//getting the direction that was pressed by the user
function directionDown(arrowDirection) {

    if (arrowDirection.key === 'ArrowUp' && directionY != 1) {
        directionX = 0
        directionY = -1
    }
    else if (arrowDirection.key === 'ArrowDown' && directionY != -1) {
        directionX = 0
        directionY = 1
    }
    else if (arrowDirection.key === 'ArrowRight' && directionX != -1) {
        directionX = 1
        directionY = 0
    }
    else if (arrowDirection.key === 'ArrowLeft'&& directionX != 1) {
        directionX = -1
        directionY = 0
    }
}

//change the food position upon refreshing
changeFoodPosition();

//this will make the "snake" look like it is moving
//calls the game to start then repeats this call every 110 milisecs
setInterval(game, 110);