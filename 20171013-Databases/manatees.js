var mongoose = require("mongoose");
//connect to database
mongoose.connect("mongodb://localhost/manatees_app", {useMongoClient: true});
mongoose.Promise = global.Promise;

//describe how cats look--pattern
var manateeSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

//create a complex model from the pattern
//this gives access to methods with the var
var Manatee = mongoose.model("Manatee", manateeSchema); //protocol is to pass a singular name to string argument; mongoose library will pluralize

//create a new manatee

var luoay = new Manatee({
    name: "Luoay",
    age: 10,
    temperament: "Mad"
});

var zizou = new Manatee({
    name: "Zizou",
    age: 3,
    temperament: "combative"
});

//luoay.save(function(err, manatee){
//    if(err){
//        console.log("There has been an error.")
//    }else{
//        console.log("We just saved a manatee to the DB:");
//        console.log(manatee);
//    }
//});

//zizou.save(function(err, manatee){
//    if(err){
//        console.log("There has been an error.")
//    }else{
//        console.log("We just saved a manatee to the DB:");
//        console.log(manatee);
//    }
//});

Manatee.create({
    name: "Mercy",
    age: 7,
    temperament: "mild"
}, function(err, manatee){
    if(err){
        console.log("An error has occurred.")
    }else{
        console.log(manatee)
    }
});

//retrieve all manatees and console.log

Manatee.find({}, function(err, manatees){
    if(err){
        console.log("We have an alert.");
    }else{
        console.log("Retrieving all manatees in our database, sir...");
        console.log(manatees);
    }
});