var button = document.querySelector(".win-button");
var paragraph = document.querySelector(".winner-loser");
var clicked = false;

button.addEventListener("click", function(){
    clicked = !clicked;
    if (clicked){
        paragraph.textContent = "You're a loser and you'll always be one. Or maybe...try again?";
    }else{
        paragraph.textContent = "Try Again!";
    }
    
});