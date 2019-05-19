/* 
Rules: 
1. Player must guess number between max and min
2. Player gets certain number of guesses
3. Player can see guesses remaining
4. Player sees correct number in the event of losing
5. Player can choose to play again
*/

// game values
let min = 1,
    max = 10,
    x = Math.floor(Math.random() * 11),
    guesses = 3;


// UI elements
const gameEl = document.querySelector('#game'),
    minNumEl = document.querySelector('.min-num'),
    maxNumEl = document.querySelector('.max-num'),
    guessBtnEl = document.querySelector('#guess-btn'),
    guessInputEl = document.querySelector('#guess-input'),
    messageEl = document.querySelector('.message');

// assign max and min to UI
minNumEl.textContent = min;
maxNumEl.textContent = max;
console.log(x);

// Listen for guess
guessBtnEl.addEventListener('click', function () {
    // traversey uses parseInt() to transform the string to a num
    // but this works without that, whether the input field is 
    // of type number or text.
    let guess = guessInputEl.value;
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Your guess is invalid. Try again with a number between ${min} and ${max}.`, 'red');
    } else {
        if (guess == x) {
            guessInputEl.disabled = true;
            guessInputEl.style.borderColor = 'green';
            setMessage('You are correct.', 'green');
        } else {
            guesses--;
            if (guesses > 0) {
                setMessage(`Incorrect. ${guesses} guesses remaining.`);
            } else {
                setMessage(`Sorry, you did not guess correctly. The number was ${x}. <a href=#>Try again!</a>`)
            }
        }
    }
});

function setMessage(msg, style){
    messageEl.innerHTML = msg;
    messageEl.style.color = style;
}


