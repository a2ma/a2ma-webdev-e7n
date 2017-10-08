var express = require("express");
var app = express();

console.log('Hello from the Express App!');

//=====================================================
//Routes
//=====================================================

app.get("/", function(req, res){
   res.send("Hello. Welcome to my assignment."); 
});

app.get("/speak/:pet", function(req, res){
    var animal = req.params.pet;
    if(animal === 'dog'){
        res.send("The " + animal + " says woof!");
        console.log("DOG!");
    }else if(animal === 'cat'){
        res.send("The " + animal + " says meow!");
        console.log("CAT!");
    }else if(animal === 'pig'){
        res.send("The " + animal + " says oink!");
        console.log("PIG!");
    }
});

app.get("/repeat/:word/:number", function(req, res){
    var count = parseInt(req.params.number, 10);
    console.log(count);
    var word = req.params.word;
    console.log(word);
    for(var i = 0; i < count; i++){
        res.send(word);
    }
    
    
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