/*
Game Function:
 - Player must guess a number between a min and a max
 - Player gets a certain amount of guesses
 - Notify the player the number of guesses remaining
 - Notify the player the correct answer if lost
 - Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;
    
    
// UI Elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message')
    ;

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function(){
    if(guessBtn.value.toLowerCase()==='submit'){
        gamePlay();
    }else if(guessBtn.value.toLowerCase()==='play again'){
        location.reload();
    }
    
});

// Game Play
function gamePlay(){
    let guess = parseInt(guessInput.value);

    // Validate to check if it's NaN or outside the limits
    if(isNaN(guess) || guess>max || guess<min){
        setMessage(`Please enter the number between ${min} and ${max}`, 'red')
    }else{
        // Check if Won
        if(guess === winningNum){
            // Game over and Won
            gameOver(true, `${winningNum} is correct. You Win!`)
        }else{
            // Subtract 1 from guess number
            guessesLeft -= 1;

            if(guessesLeft===0){
                // Game over and lost
                gameOver(false, `Game over, you lost. The correct number was ${winningNum}`);
            
            }else{
                // Game Continues - answer wrong

                // Make Border green
                guessInput.style.borderColor = 'red';

                // Clear the input
                guessInput.value = '';

                // Set Message
                setMessage(`${guess} is wrong, you've ${guessesLeft} guesses left. Try again!`, 'red')
            }
        }
    }
}

// Game Over
function gameOver(won, msg){
    // Disable the input
    guessInput.disabled = true;
    const color = won ? 'green' : 'red' ;
    // Make Border green
    guessInput.style.borderColor = color;
    // Set Message
    setMessage(msg, color);
    //Change Text
    guessBtn.value = "Play Again";
}

//Randoming winning number
function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1) + min);
}

// Set Message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}