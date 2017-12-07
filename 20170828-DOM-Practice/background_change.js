var button = document.querySelector("button");
var isPurple = false;
//var background = document.querySelector("body");

//button.addEventListener("click", function(){
////    background.classList.toggle("red");
//    isPurple = !isPurple;
//    if(isPurple){
//        document.body.style.background = "red";
//    }else {
//        document.body.style.background = "white";
//    }
//});

button.addEventListener("click", function(){
    document.body.classList.toggle("red");
});