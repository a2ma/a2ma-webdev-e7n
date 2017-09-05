var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var gameOver = false;

init();

function init(){
    setupModeButtons();
    setupSquares();
    
    reset();
};

function setupModeButtons(){
        //mode buttons event listeners
    for (var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === 'Easy' ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
};

function setupSquares(){
    for (var i = 0; i < squares.length; i++){
    //add click listeners to squares
        squares[i].addEventListener("click", function(){
        //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare to picked color
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                messageDisplay.style.color = "green";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            }else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
                messageDisplay.style.color = "black";
            }
        });
    };
};

function reset(){
    //reset h1 color, resetButton
    h1.style.background = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //get new colors
    colors = generateRandomColors(numSquares);
    //pick the answer
    pickedColor = pickColor();
    //change colorDisplay
    colorDisplay.textContent = pickedColor;
    //color the squares with new colors
    for (var i = 0; i < squares.length; i++){
      if(colors[i]){
        squares[i].style.display = "block";
        squares[i].style.background = colors[i];  
      }else{
          squares[i].style.display = "none";
      }
    };
}

function changeColors (color){
    //loop through all squares
    for (var i = 0; i < squares.length; i++){
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
};

function pickColor(){
    //randomly pick one of the colors generated to be the winning choice
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

function generateRandomColors(num){
    //build an array
    var colorArray = [];
    //fill the array with randomly generated colors (RGB)
    for (var i = 0; i < num; i++){
        //get random RGB color and push into array
        colorArray.push(randomColor());
    }
    //return array
    return colorArray;
};

function randomColor(){
    //generate the random RGB color values
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")";
};

resetButton.addEventListener("click", function(){
    reset();
});




//function setSquares (){
//    
//};

//revealreset.addEventListener("click", function (){
//    changeColors(pickedColor);
//});



//function reset(){
//    gameOver = true;
//    if(gameOver){
//        revealreset.textContent = "New Game?";
//    };
//    
//    revealreset.addEventListener("click", function(){
//        //get new colors
//        colors = generateRandomColors(6);
//        //pick the answer
//        pickedColor = pickColor();
//        //change colorDisplay
//        colorDisplay.textContent = pickedColor;
//        //color the squares with new colors
//        setSquares();
//    });
//};

//   var colors =  [
//    "rgb(255, 0, 0)",
//    "rgb(255, 255, 0)",
//    "rgb(0, 255, 0)",
//    "rgb(0, 255, 255)",
//    "rgb(0, 0, 255)",
//    "rgb(255, 0, 255)"
//];


//var easyBtn = document.querySelector("#easyBtn");
//var hardBtn = document.querySelector("#hardBtn");
//two buttons above refactored into one list of buttons

//Two event listeners below combined into one

//easyBtn.addEventListener("click", function () {
//    easyBtn.classList.add("selected");
//    hardBtn.classList.remove("selected");
//    numSquares = 3;
//    colors = generateRandomColors(numSquares);
//    pickedColor = pickColor();
//    colorDisplay.textContent = pickedColor;
//    
//});
//
//hardBtn.addEventListener("click", function () {
//    hardBtn.classList.add("selected");
//    easyBtn.classList.remove("selected");
//    numSquares = 6;
//    colors = generateRandomColors(numSquares);
//    pickedColor = pickColor();
//    colorDisplay.textContent = pickedColor;
//    for (var i = 0; i < squares.length; i++){
//        squares[i].style.background = colors[i];  
//        
//    };
//});