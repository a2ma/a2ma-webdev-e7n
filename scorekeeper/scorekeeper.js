var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
var resetbutton = document.getElementById("reset");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var numInput = document.querySelector("input[type='number']");
var winningDisplay = document.querySelector("#winningDisplay");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;

p1button.addEventListener("click", function(){
    if(!gameOver){
        p1score++;
        p1display.textContent = p1score;
        
        console.log(p1score, winningScore);
        if(p1score === winningScore){
            alert("GAME OVER!");
            gameOver = true;
            p1display.classList.add("winner");
        }
    }
});

p2button.addEventListener("click", function(){
    if(!gameOver){
        p2score++;
        p2display.textContent = p2score;
        if(p2score === winningScore){
            alert("GAME OVER!");
            gameOver = true;
            p2display.classList.add("winner");
        }
    }
});

resetbutton.addEventListener("click", function(){
    reset();
})

function reset (){
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1score = 0;
    p2score = 0;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
    gameOver = false;
}
numInput.addEventListener("change", function(){
    if(numInput.value > 0){
        winningDisplay.textContent = numInput.value; //could also use this.value here
        winningScore = Number(numInput.value);
        reset();
    }else{
        alert("Invalid Operation; please try again.")
    }
});

