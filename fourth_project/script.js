let randomNumber = parseInt((Math.random()*100)+1)
const submitButton = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver  = document.querySelector('.resultParas')
const p  = document.createElement('p')

let prevGuess = []

let numGuesse = 1
let playGame  = true

if(playGame){
    submitButton.addEventListener('click', (e) => {
     e.preventDefault()   
     const guess = parseInt(userInput.value)
     validateGuess(guess)

    } )
}

function validateGuess(guesses)
{
  if(isNaN(guesses)){
    alert('Please enter a valid number')
  }
  else if (guesses<1){
    alert('Please enter number more than one')
  }
  else if (guesses>100){
    alert('Please enter number less than 100')
  }
  else{
    prevGuess.push(guesses)
    if(numGuesse === 10){
        displayGuess(guesses)
        displayMessage(`Game Over. Random Number was ${randomNumber}`)
        endGame()
    }
    else{
        displayGuess(guesses)
        checkGuess(guesses)
    }
  }
}

function checkGuess (guesses)
{
    if (guesses === randomNumber) {
        displayMessage(`You guessed it right`)
        endGame();
    }
    else if (guesses < randomNumber){
        displayMessage(`Number is too low`)
    }
    else if (guesses > randomNumber){
        displayMessage(`Number is too high`)
    }
}
function displayGuess (guesses)
{
    userInput.value = " "
    guessSlot.innerHTML += `${guesses} , `
    numGuesse++;
    remaining.innerHTML = `${11-numGuesse}`
}

function displayMessage (message)
{
   lowOrHi.innerHTML = `<h3>${message}</h3>`
}
function endGame ()
{
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id = 'newGame'> Start New Game</h2>`
  startOver.appendChild(p)
  playGame = false;
  newGame()
}
function newGame ()
{
   const newGameButton = document.querySelector('#newGame')
   newGameButton.addEventListener('click' , (e)=>{
    randomNumber = parseInt((Math.random()*100)+1);
    prevGuess = []
    numGuesse =1 ;
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11-numGuesse}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    displayMessage(" ")
    playGame = true
   })
}