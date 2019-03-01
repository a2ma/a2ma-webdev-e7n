var button = document.querySelector(".win-button");
var paragraph = document.querySelector(".winner-loser");
var myImage = document.querySelector('#change');
var clicked = false;

button.addEventListener("click", function(){
    clicked = !clicked;
    if (clicked){
        paragraph.textContent = "You're a loser and you'll always be one. Or maybe...try again?";
    }else{
        paragraph.textContent = "Try Again!";
    }
    
});

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/milos-simic-351441.jpg') {
        myImage.setAttribute ('src', 'img')
    }
}