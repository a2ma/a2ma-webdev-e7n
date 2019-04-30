var btnBoring = document.querySelector("#boring");
var btnRando = document.querySelector("#rando");
var closeWindow = document.querySelector('#close').addEventListener('click', function(){
    window.close();
});

// var isPurple = false;
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

btnBoring.addEventListener("click", function(){
    document.body.classList.toggle("red");
});

btnRando.addEventListener("click", function(){
    document.body.style.background = randoRGB();
});



function randoRGB(){
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);

    return `rgb(${x}, ${y}, ${z})`;
}