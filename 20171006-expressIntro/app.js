var express = require("express");
var app = express();

console.log('Hello from the Express App!');

//=====================================================
//Routes
//=====================================================

app.get("/", function (req, res) {
    res.send("Hello. Welcome to my assignment."); 
});

app.get("/speak/:pet", function(req, res){
    var sounds = {
        pig: "Oink",
        dog: "Woof",
        cat: "Meow",
        goldfish: "..."
    }
    var animal = req.params.pet.toLowerCase;
    var sound = sounds[animal];
//    if(animal === 'dog'){
//        sound = "woof!";
//    }else if(animal === 'cat'){
//        sound = "meow!";
//    }else if(animal === 'pig'){
//        sound = "oink!"
//    }
    
    res.send("The " + animal + " says " + sound + "!");
});

app.get("/repeat/:word/:times", function(req, res){
    var count = parseInt(req.params.times, 10); //or Number(req.params.times)
    console.log(count);
    var word = req.params.word;
    console.log(word);
    var repeat = []; //don't have to use an array, can just use a string and then concatenate each time, with the addition of a space
    for(var i = 0; i < count; i++){
        repeat.push(word)
    }
        res.send(repeat.join(" "));
    
//    while(count>0){
//        res.send(word);
//        count = count - 1;
//    }
});

app.get("/*", function(req, res){
   res.send("Page not found. You don't have the proper authority, do you?"); 
});


//Tell Express to listen for requests (this starts the server):
app.listen(3000, function(){
    console.log('Now listening on port 3000.')
});


//process.env.PORT, process.env.IP -- apparently only used for c9